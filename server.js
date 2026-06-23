// ============================================================
//  BannerGym ローカル中継サーバー（server.js）
//  - APIキーを隠して、Claudeに画像＋お題を送り、採点結果を返す
//  - 使い方は SETUP_LOCAL.md を見てな！
// ============================================================
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const HTML = path.join(__dirname, "bannergym.html");

// APIキーを取得（環境変数 → なければ apikey.txt の中身）
function getApiKey() {
  if (process.env.ANTHROPIC_API_KEY) return process.env.ANTHROPIC_API_KEY.trim();
  try { return fs.readFileSync(path.join(__dirname, "apikey.txt"), "utf8").trim(); }
  catch (e) { return ""; }
}

// コーチ（AI審査員）の指示書
const SYSTEM = `あなたは「デザップ」のライオンコーチや。バナー・サムネ・LP・Webサイトのデザインを、プロのアートディレクターの目で評価する。見た目は可愛いけど、評価は辛口でビシバシいく赤ペン先生。口調は関西弁。せやけど相手を見捨てへん。良いとこは必ず認めて、次の一歩を具体的に示したる。

ユーザーが「お題（依頼書）」に沿って作った画像を渡されるから、実際に画像をよう見て採点・添削してや。

【6つの評価軸（各0〜100点）】
- haishoku（配色）：色数の整理、主役と背景のコントラスト、テーマカラーとの一致
- layout（レイアウト・余白）：整列、余白の効き、視覚的な安定、重心
- typography（文字組み・可読性）：フォント選び、サイズの強弱、一瞬で読めるか
- shisen（視線誘導・伝わりやすさ）：0.5秒で何の制作物か分かるか、視線の流れ
- click（クリックしたくなる魅力）：コピーの強さ、ベネフィット、限定感、自分ごと感
- sekaikan（世界観・お題一致）：ターゲット・トーンの一致、ブランドの空気感

【お題条件チェック】画像を見て判定：
- catchcopy_used：指定キャッチコピーが入っているか
- theme_color_used：指定テーマカラーが使われているか
- cta_present：CTA（行動喚起）があるか
- size_ok：指定サイズ・比率に合っていそうか（画像の縦横比から推定）

【採点の目安】90+:プロ級／75-89:良い／60-74:あと一歩／40-59:基礎から／〜39:要再挑戦。難易度「易」は少し甘め、「難」は厳しめに。甘く付けすぎたらアカン、忖度なしでいけ。

【comments】各評価軸ごとに、画像の具体的な箇所に触れた一言（「どこが」「どう」）。抽象論は禁止。
【improvements】優先度の高い順に「ちょうど3つ」。各 n(1〜3)、where(どこ)、how(どう直す・具体的に)、why(なぜ)、x・y（その箇所が画像のどのあたりかを、左上を0・右下を100とした%の数値で）。
【good_points】良いところを2〜3つ。
【client_voice】コーチからの一言。関西弁で、辛口やけど前向きに（1〜2文）。

出力は必ず指定のJSON形式だけ。前置きや余計な文章は書かんといて。`;

// 返ってくるJSONの形（構造化出力スキーマ）
const catProps = { haishoku:{type:"integer"}, layout:{type:"integer"}, typography:{type:"integer"}, shisen:{type:"integer"}, click:{type:"integer"}, sekaikan:{type:"integer"} };
const catStr   = { haishoku:{type:"string"}, layout:{type:"string"}, typography:{type:"string"}, shisen:{type:"string"}, click:{type:"string"}, sekaikan:{type:"string"} };
const catReq   = ["haishoku","layout","typography","shisen","click","sekaikan"];
const SCHEMA = {
  type: "object", additionalProperties: false,
  properties: {
    total_score: { type: "integer" },
    scores: { type: "object", additionalProperties: false, properties: catProps, required: catReq },
    comments: { type: "object", additionalProperties: false, properties: catStr, required: catReq },
    condition_check: { type: "object", additionalProperties: false,
      properties: { catchcopy_used:{type:"boolean"}, theme_color_used:{type:"boolean"}, cta_present:{type:"boolean"}, size_ok:{type:"boolean"} },
      required: ["catchcopy_used","theme_color_used","cta_present","size_ok"] },
    good_points: { type: "array", items: { type: "string" } },
    improvements: { type: "array", items: { type: "object", additionalProperties: false,
      properties: { n:{type:"integer"}, where:{type:"string"}, how:{type:"string"}, why:{type:"string"}, x:{type:"number"}, y:{type:"number"} },
      required: ["n","where","how","why","x","y"] } },
    weakest_category: { type: "string", enum: catReq },
    client_voice: { type: "string" },
  },
  required: ["total_score","scores","comments","condition_check","good_points","improvements","weakest_category","client_voice"],
};

const server = http.createServer((req, res) => {
  // トップページ＝アプリを表示
  if (req.method === "GET" && (req.url === "/" || req.url === "/bannergym.html")) {
    fs.readFile(HTML, (e, data) => {
      if (e) { res.writeHead(500); res.end("bannergym.html が見つからへん"); return; }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    });
    return;
  }

  // 採点API
  if (req.method === "POST" && req.url === "/api/score") {
    let body = "";
    req.on("data", (c) => { body += c; if (body.length > 25 * 1024 * 1024) req.destroy(); });
    req.on("end", async () => {
      try {
        const { odai, image } = JSON.parse(body);
        const key = getApiKey();
        if (!key) return sendJson(res, 500, { error: "APIキーが設定されてへんで。apikey.txt にキーを入れてな。" });

        const m = /^data:(image\/\w+);base64,(.+)$/s.exec(image || "");
        if (!m) return sendJson(res, 400, { error: "画像データが読めへんかった。" });
        const mediaType = m[1], data = m[2];

        const apiRes = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
          body: JSON.stringify({
            model: "claude-opus-4-8",
            max_tokens: 2000,
            system: SYSTEM,
            output_config: { format: { type: "json_schema", schema: SCHEMA } },
            messages: [{ role: "user", content: [
              { type: "text", text: "【お題】\n" + odai + "\n\nこの作品を、お題の条件に照らして採点・添削してや。" },
              { type: "image", source: { type: "base64", media_type: mediaType, data: data } },
            ] }],
          }),
        });
        const json = await apiRes.json();
        if (!apiRes.ok) return sendJson(res, apiRes.status, { error: (json.error && json.error.message) || "APIエラー" });
        const textBlock = (json.content || []).find((b) => b.type === "text");
        if (!textBlock) return sendJson(res, 500, { error: "AIの返答を解析できへんかった。" });
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
        res.end(textBlock.text); // 採点結果のJSONをそのまま返す
      } catch (err) {
        sendJson(res, 500, { error: String(err) });
      }
    });
    return;
  }

  // 画像ファイル（コーチのイラストなど）を配信
  if (req.method === "GET" && /\.(png|jpe?g|svg|webp|gif)$/i.test(req.url)) {
    const file = path.join(__dirname, decodeURIComponent(req.url.split("?")[0]));
    if (!file.startsWith(__dirname)) { res.writeHead(403); res.end(); return; }
    fs.readFile(file, (e, data) => {
      if (e) { res.writeHead(404); res.end(); return; }
      const ext = path.extname(file).toLowerCase().slice(1);
      const types = { png:"image/png", jpg:"image/jpeg", jpeg:"image/jpeg", svg:"image/svg+xml", webp:"image/webp", gif:"image/gif" };
      res.writeHead(200, { "Content-Type": types[ext] || "application/octet-stream" });
      res.end(data);
    });
    return;
  }

  res.writeHead(404); res.end("not found");
});

function sendJson(res, code, obj) {
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(obj));
}

if (typeof fetch === "undefined") {
  console.error("\n⚠️ Node.js 18以上が必要やで。 https://nodejs.org からLTS版を入れてな。\n");
  process.exit(1);
}

server.listen(PORT, () => {
  console.log("\n🦁 BannerGym 起動したで！ ブラウザで  http://localhost:" + PORT + "  を開いてな\n");
  if (!getApiKey()) console.log("⚠️ apikey.txt が見当たらへん。APIキーを apikey.txt に保存してから開いてな。\n");
});
