      /* =========================================================
         お題データ（依頼書）— 全年代・男女・多ジャンル＋サイズ指定
         本番ではAIが自動生成。デモは固定リストから出題。
      ========================================================= */
      const ODAI = [
        // ===== LV1 バナー =====
        { level:1, lvName:"バナー", client:"PEACHY COFFEE 広報部",
          msg:"夏の新作、いよいよ出します！果肉のごろっと感が伝わるバナーをお願いできますか？",
          title:'ごろっと果肉の "白桃ラテ" 新登場バナー',
          brief:{ "サイズ":"1080×1080px（SNS正方形）","難易度":"易","概要":"季節限定ドリンクの告知。果肉感と世界観重視","ターゲット":"20〜30代女性。新作に敏感なカフェ好き","サービス名":"PEACHY COFFEE","キャッチコピー":"まるごと白桃ラテ、新登場！","サブテキスト":"果肉たっぷり。とろける甘さにうっとり。","CTAボタン":"今だけの限定メニューをチェック！","テーマカラー":"ピンク・白","印象":"ジューシー・みずみずしい・かわいい" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:1, lvName:"バナー", client:"BEAT GYM 運営",
          msg:"夏前の入会キャンペーン、勝負のバナーです！背中を押す一枚を頼みます。",
          title:"夏まであと90日｜入会キャンペーンバナー",
          brief:{ "サイズ":"1200×628px（横長ディスプレイ広告）","難易度":"易","概要":"入会キャンペーン告知。行動を後押しする力強い構成","ターゲット":"20〜40代男女、運動初心者","サービス名":"BEAT GYM","キャッチコピー":"夏まで、あと90日。","サブテキスト":"今日の一歩が、未来の自分をつくる。","CTAボタン":"無料体験を予約する","テーマカラー":"ブラック・ネオンイエロー","印象":"力強い・スピード感・本気" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:1, lvName:"バナー", client:"健寿堂（健康食品）",
          msg:"シニアの方に向けた健康サプリのバナーです。安心感と、毎日の元気を伝えたいです。",
          title:"シニア向け健康サプリ 訴求バナー",
          brief:{ "サイズ":"1200×628px（横長）","難易度":"易","概要":"健康サプリの定期購入促進。読みやすさ最優先","ターゲット":"60〜70代、健康志向のシニア","サービス名":"健寿堂 -歩みサポート-","キャッチコピー":"毎日を、軽やかに歩こう。","サブテキスト":"ひざ・腰の毎日に。続けやすい一日2粒。","CTAボタン":"初回半額で試す","テーマカラー":"深緑・白・金","印象":"信頼・安心・健やか（大きな文字で）" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:1, lvName:"バナー", client:"市民総合病院",
          msg:"人間ドックの受診案内バナーです。働き盛りの方に、健康の大切さを伝えたいです。",
          title:"人間ドック 受診案内バナー",
          brief:{ "サイズ":"1200×628px（横長）","難易度":"中","概要":"健診の予約促進。信頼感と受けやすさを訴求","ターゲット":"40〜60代男女、働き盛り","サービス名":"市民総合病院 健診センター","キャッチコピー":"元気な毎日は、年に一度の検査から。","サブテキスト":"半日コース・予約はWebで簡単。","CTAボタン":"WEBで予約する","テーマカラー":"青・白・グレー","印象":"清潔・信頼・誠実" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:1, lvName:"バナー", client:"GRIT メンズグルーミング",
          msg:"メンズスキンケアの新商品バナーです。男性が手に取りやすい、洗練された感じで。",
          title:"メンズスキンケア 新商品バナー",
          brief:{ "サイズ":"1080×1080px（SNS正方形）","難易度":"中","概要":"男性向けスキンケアの認知・購入促進","ターゲット":"20〜40代男性、清潔感を意識","サービス名":"GRIT","キャッチコピー":"清潔感は、最強の武器だ。","サブテキスト":"洗う・整える、これ一本。","CTAボタン":"詳しく見る","テーマカラー":"チャコール・白・ブルーグレー","印象":"クール・洗練・無駄がない" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:1, lvName:"バナー", client:"LUMINA コスメ",
          msg:"新作リップの発売バナーです。ツヤと血色感が伝わる、おしゃれな一枚を。",
          title:"新作ティントリップ 発売バナー",
          brief:{ "サイズ":"1080×1350px（SNS縦長）","難易度":"易","概要":"新作リップの発売告知。質感と高見えを訴求","ターゲット":"20代女性、トレンドに敏感","サービス名":"LUMINA","キャッチコピー":"塗った瞬間、私が好きになる。","サブテキスト":"全6色・するんと続くツヤ発色。","CTAボタン":"新色をチェック","テーマカラー":"ヌーディーベージュ・くすみピンク","印象":"上品・大人かわいい・ツヤ" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:1, lvName:"バナー", client:"暮らしのマルシェ（EC）",
          msg:"夏のタイムセール、開催します！お得感がパッと伝わるバナーを大至急で！",
          title:"夏の大感謝タイムセール バナー",
          brief:{ "サイズ":"728×90px（横長バナー）","難易度":"中","概要":"期間限定セールの告知。狭い横長で要点を伝える","ターゲット":"30〜40代、節約志向","サービス名":"暮らしのマルシェ","キャッチコピー":"今日だけ、全品20%OFF。","サブテキスト":"暮らしを彩る雑貨が、お得に。","CTAボタン":"セール会場へ","テーマカラー":"赤・白・黄","印象":"賑やか・お得・スピード感" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:1, lvName:"バナー", client:"コードの森（スクール）",
          msg:"無料説明会の集客バナーです。未経験でも安心、が伝わると嬉しいです。",
          title:"プログラミングスクール 無料説明会バナー",
          brief:{ "サイズ":"1200×628px（横長）","難易度":"中","概要":"無料説明会への申込促進。未経験者の不安を払拭","ターゲット":"20〜30代男女、転職を考える未経験者","サービス名":"コードの森","キャッチコピー":"未経験から、3ヶ月でエンジニア。","サブテキスト":"現役講師がマンツーマンで伴走。","CTAボタン":"無料説明会に申し込む","テーマカラー":"ネイビー・グリーン","印象":"信頼・前向き・誠実" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:1, lvName:"バナー", client:"大人の休日クラブ",
          msg:"シニア向けの旅行プランのバナーです。ゆったりした上質な時間を感じさせたいです。",
          title:"シニア向け ゆったり温泉旅バナー",
          brief:{ "サイズ":"1200×628px（横長）","難易度":"中","概要":"シニア向け旅行プランの訴求。ゆとり・上質感","ターゲット":"60〜70代夫婦","サービス名":"大人の休日クラブ","キャッチコピー":"今だから、ゆっくり旅をしよう。","サブテキスト":"少人数・添乗員つきで安心の温泉旅。","CTAボタン":"プランを見る","テーマカラー":"えんじ・生成り・金","印象":"上質・落ち着き・安心（読みやすい大きさ）" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:1, lvName:"バナー", client:"わんにゃん保険",
          msg:"ペット保険の資料請求バナーです。大切な家族を守る安心感を伝えたいです。",
          title:"ペット保険 資料請求バナー",
          brief:{ "サイズ":"300×250px（レクタングル）","難易度":"中","概要":"資料請求の促進。小さめ枠で要点を凝縮","ターゲット":"ペットを飼う30〜50代男女","サービス名":"わんにゃん保険","キャッチコピー":"もしもの時、迷わないために。","サブテキスト":"月々1,500円〜、通院もカバー。","CTAボタン":"無料で資料請求","テーマカラー":"オレンジ・白・茶","印象":"あたたかい・安心・誠実" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:1, lvName:"バナー", client:"FUJI GOLF",
          msg:"ゴルフ用品セールのバナーです。週末ゴルファーが思わず見たくなる感じで！",
          title:"ゴルフ用品 週末セールバナー",
          brief:{ "サイズ":"1200×628px（横長）","難易度":"易","概要":"用品セールの告知。スコアアップ欲求を刺激","ターゲット":"30〜60代男性、週末ゴルファー","サービス名":"FUJI GOLF","キャッチコピー":"スコアは、道具で変わる。","サブテキスト":"人気クラブが最大40%OFF。","CTAボタン":"セール品を見る","テーマカラー":"濃緑・白・ゴールド","印象":"本格・信頼・スポーティ" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:1, lvName:"バナー", client:"朝採れ便（食品）",
          msg:"産直野菜の定期便バナーです。新鮮さ・美味しそうな感じが伝わると◎",
          title:"産直野菜の定期便 バナー",
          brief:{ "サイズ":"1080×1080px（SNS正方形）","難易度":"易","概要":"定期便の新規申込促進。鮮度を訴求","ターゲット":"30〜50代、食にこだわる家庭","サービス名":"朝採れ便","キャッチコピー":"畑から、まっすぐ食卓へ。","サブテキスト":"朝採れ野菜が、翌日とどく。","CTAボタン":"初回50%OFFで試す","テーマカラー":"緑・白・土のブラウン","印象":"新鮮・素朴・健康的" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:1, lvName:"バナー", client:"夏音祭（音楽フェス）",
          msg:"夏フェスの告知バナーです！ワクワクが爆発する、勢いのある一枚を。",
          title:"野外音楽フェス 開催告知バナー",
          brief:{ "サイズ":"1080×1080px（SNS正方形）","難易度":"中","概要":"フェス開催・チケット告知。高揚感を最大化","ターゲット":"10〜30代男女、音楽好き","サービス名":"夏音祭 -NATSUNE-","キャッチコピー":"この夏、いちばん熱くなる2日間。","サブテキスト":"8/10-11 海辺の特設ステージ","CTAボタン":"チケットを取る","テーマカラー":"ビビッドピンク・オレンジ・青","印象":"高揚・勢い・非日常" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        // ===== LV2 サムネ =====
        { level:2, lvName:"サムネ", client:"ヨゾラGAMES",
          msg:"新作ホラゲの実況サムネです。思わずクリックしたくなる怖さ、出せますか…？",
          title:"深夜実況ホラーゲーム｜YouTubeサムネ",
          brief:{ "サイズ":"1280×720px（YouTube）","難易度":"中","概要":"ホラー実況のサムネ。一瞬で目を引く・クリックさせる","ターゲット":"10〜20代男女、ゲーム好き","サービス名":"ヨゾラGAMES","キャッチコピー":"深夜にやるんじゃなかった。","サブテキスト":"新作ホラー、初見プレイ","CTAボタン":"（サムネ内に「衝撃のラスト」など煽り）","テーマカラー":"黒・血のような赤","印象":"恐怖・緊張・好奇心" },
          must:["キャッチコピー","テーマカラー","サイズ"] },

        { level:2, lvName:"サムネ", client:"ずぼら飯研究所",
          msg:"10分丼レシピ動画のサムネです。美味しそう＆簡単そう、が伝わるように。",
          title:"時短レシピ動画｜YouTubeサムネ",
          brief:{ "サイズ":"1280×720px（YouTube）","難易度":"易","概要":"時短レシピのサムネ。シズル感と手軽さ","ターゲット":"20〜40代、忙しい一人暮らし・共働き","サービス名":"ずぼら飯研究所","キャッチコピー":"10分で、優勝。","サブテキスト":"包丁いらずの爆速丼","CTAボタン":"（料理写真を大きく配置）","テーマカラー":"赤・黄・白","印象":"美味しそう・親しみ・手軽" },
          must:["キャッチコピー","テーマカラー","サイズ"] },

        { level:2, lvName:"サムネ", client:"マネー大学",
          msg:"新NISA解説動画のサムネです。信頼感がありつつ、見たくなる感じで！",
          title:"新NISA解説動画｜YouTubeサムネ",
          brief:{ "サイズ":"1280×720px（YouTube）","難易度":"中","概要":"投資解説のサムネ。信頼感＋ちょい煽り","ターゲット":"20〜50代男女、投資初心者","サービス名":"マネー大学","キャッチコピー":"新NISA、結局これだけやればいい。","サブテキスト":"知らないと損する5つのこと","CTAボタン":"（人物＋図解を配置）","テーマカラー":"紺・黄・白","印象":"信頼・明快・ちょい煽り" },
          must:["キャッチコピー","テーマカラー","サイズ"] },

        { level:2, lvName:"サムネ", client:"ふらり旅Vlog",
          msg:"京都ひとり旅Vlogのサムネです。エモくて、行きたくなる雰囲気で。",
          title:"京都ひとり旅Vlog｜YouTubeサムネ",
          brief:{ "サイズ":"1280×720px（YouTube）","難易度":"易","概要":"旅Vlogのサムネ。情緒・憧れで再生を誘う","ターゲット":"20〜40代男女、旅・癒し好き","サービス名":"ふらり旅Vlog","キャッチコピー":"ひとりの京都は、贅沢だった。","サブテキスト":"秋の朝、誰もいない寺院","CTAボタン":"（風景写真を大きく）","テーマカラー":"和の朱・墨・生成り","印象":"情緒・静けさ・憧れ" },
          must:["キャッチコピー","テーマカラー","サイズ"] },

        // ===== LV3 LP =====
        { level:3, lvName:"LP", client:"そよかぜ歯科クリニック",
          msg:"新規開院します！歯医者が苦手な方にも安心が伝わるLPをお願いします。",
          title:"新規開院｜集患ランディングページ",
          brief:{ "サイズ":"幅1280px（縦長・高さ自由）","難易度":"中","概要":"新規開院の集患LP。予約獲得が目的","ターゲット":"近隣のファミリー層、歯医者が苦手な人","サービス名":"そよかぜ歯科クリニック","必須セクション":"FV／院長あいさつ／診療内容／院内写真／アクセス／予約CTA（固定）","キャッチコピー":"「痛くない」を、あたりまえに。","CTAボタン":"かんたんWEB予約","テーマカラー":"白・水色・やわらかい緑","印象":"清潔・安心・やさしい","追加評価観点":"予約までの導線・情報の流れ" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:3, lvName:"LP", client:"らくらくスマホ教室",
          msg:"シニア向けスマホ教室のLPです。「私にもできそう」と思える安心感を大切に。",
          title:"シニア向けスマホ教室｜申込LP",
          brief:{ "サイズ":"幅1280px（縦長・大きめ文字推奨）","難易度":"中","概要":"体験申込のLP。ITが苦手な層の不安を払拭","ターゲット":"60〜80代、スマホ初心者","サービス名":"らくらくスマホ教室","必須セクション":"FV／よくある悩み／教室の特徴／先生紹介／料金／アクセス／申込CTA","キャッチコピー":"スマホ、ゆっくり覚えませんか？","CTAボタン":"無料体験に申し込む","テーマカラー":"オレンジ・白・若草色","印象":"やさしい・安心・親しみ（大きく読みやすく）","追加評価観点":"文字の大きさ・分かりやすさ・導線" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:3, lvName:"LP", client:"Tasco（SaaS）",
          msg:"タスク管理ツールの無料トライアルLPです。「これ便利！」と思わせたい！",
          title:"タスク管理SaaS｜無料トライアルLP",
          brief:{ "サイズ":"幅1280px（縦長）","難易度":"中","概要":"無料トライアル獲得LP。課題→解決の流れ","ターゲット":"中小企業のチームリーダー（男女）","サービス名":"Tasco","必須セクション":"FV／課題提起／解決（機能）／料金／導入事例／CTA","キャッチコピー":"チームの「あれ、どうなった？」をゼロに。","CTAボタン":"14日間 無料ではじめる","テーマカラー":"白・青","印象":"スマート・信頼・効率的","追加評価観点":"情報設計・CTAの導線" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:3, lvName:"LP", client:"SORA YOGA",
          msg:"ヨガスタジオの体験予約LPです。心がほどける、静かな心地よさで。",
          title:"ヨガスタジオ｜体験予約LP",
          brief:{ "サイズ":"幅1280px（縦長）","難易度":"中","概要":"体験予約のLP。リラックス感と通いやすさ","ターゲット":"20〜50代男女、運動不足・ストレス解消","サービス名":"SORA YOGA","必須セクション":"FV（世界観）／効果／レッスン紹介／スタジオ写真／料金／アクセス／予約CTA","キャッチコピー":"深呼吸から、はじめよう。","CTAボタン":"体験レッスンを予約","テーマカラー":"白・くすみグリーン・ベージュ","印象":"穏やか・心地よい・上質","追加評価観点":"世界観の統一・導線" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:3, lvName:"LP", client:"未来起業塾",
          msg:"起業セミナーの集客LPです。一歩踏み出したくなる、熱量のあるLPを。",
          title:"起業セミナー｜集客LP",
          brief:{ "サイズ":"幅1280px（縦長）","難易度":"難","概要":"セミナー申込LP。共感→実績→限定性で後押し","ターゲット":"20〜40代男女、起業・副業に興味","サービス名":"未来起業塾","必須セクション":"FV／悩み共感／内容／講師実績／参加者の声／日程／申込CTA","キャッチコピー":"「いつか」を、「今日」に変える。","CTAボタン":"無料セミナーに申し込む","テーマカラー":"黒・ゴールド・白","印象":"情熱・信頼・特別感","追加評価観点":"ストーリー設計・申込導線" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:3, lvName:"LP", client:"まいにちキッチン",
          msg:"ミールキット定期便のLPです。「これなら続く」と思える手軽さを。",
          title:"ミールキット定期便｜申込LP",
          brief:{ "サイズ":"幅1280px（縦長）","難易度":"中","概要":"定期便の申込LP。時短・続けやすさを訴求","ターゲット":"共働き・子育て世帯（男女）","サービス名":"まいにちキッチン","必須セクション":"FV／悩み共感／特徴／メニュー例／料金／お客様の声／CTA","キャッチコピー":"献立に、もう悩まない。","CTAボタン":"初回半額で試す","テーマカラー":"オレンジ・白・緑","印象":"あたたかい・手軽・おいしそう","追加評価観点":"情報の流れ・CTA" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        // ===== LV4 Webサイト =====
        { level:4, lvName:"Webサイト", client:"離島観光協会あおしま",
          msg:"離島の観光促進サイトです。「行ってみたい」を引き出す世界観で。",
          title:"離島観光サイト（複数ページ）",
          brief:{ "サイズ":"幅1440px（PCトップ）／レスポンシブ対応","難易度":"難","概要":"観光促進サイト。来島の動機づけ","ターゲット":"自然・癒しを求める20〜40代男女","サービス名":"離島観光協会あおしま","必須ページ":"トップ／見どころ／モデルコース／アクセス／よくある質問","キャッチコピー":"何もない、が、ぜんぶある。","CTAボタン":"フェリーの時刻を見る","テーマカラー":"白・海の青・砂のベージュ","印象":"開放感・静けさ・特別感","追加評価観点":"回遊・情報構造・トーン統一" },
          must:["キャッチコピー","テーマカラー","サイズ"] },

        { level:4, lvName:"Webサイト", client:"たんぽぽ税理士事務所",
          msg:"事務所のコーポレートサイトです。堅すぎず、相談しやすい雰囲気で。",
          title:"税理士事務所 コーポレートサイト（複数ページ）",
          brief:{ "サイズ":"幅1440px（PCトップ）／レスポンシブ対応","難易度":"難","概要":"信頼獲得＋問い合わせ促進","ターゲット":"個人事業主・中小企業の経営者（男女・全年代）","サービス名":"たんぽぽ税理士事務所","必須ページ":"トップ／サービス／料金／スタッフ紹介／お問い合わせ","キャッチコピー":"数字の悩み、気軽に話せる場所。","CTAボタン":"無料相談を予約","テーマカラー":"白・緑・紺","印象":"誠実・親しみ・信頼","追加評価観点":"情報構造・信頼感・問い合わせ導線" },
          must:["キャッチコピー","CTAボタン","テーマカラー","サイズ"] },

        { level:4, lvName:"Webサイト", client:"PEACHY COFFEE 本部",
          msg:"ブランドサイトを作りたいです！お店の世界観をまるごと伝えたいです。",
          title:"カフェ ブランドサイト（複数ページ）",
          brief:{ "サイズ":"幅1440px（PCトップ）／レスポンシブ対応","難易度":"難","概要":"ブランディングサイト。世界観の統一","ターゲット":"20〜40代、カフェ好き","サービス名":"PEACHY COFFEE","必須ページ":"トップ／コンセプト／メニュー／店舗一覧／ニュース","キャッチコピー":"桃いろの、しあわせ時間。","CTAボタン":"お近くの店舗を探す","テーマカラー":"ピンク・白・くすみベージュ","印象":"やわらかい・特別感・心地よい","追加評価観点":"世界観の一貫性・回遊・写真演出" },
          must:["キャッチコピー","テーマカラー","サイズ"] },
      ];

      const CATS = [
        { key:"haishoku", name:"配色" },
        { key:"layout", name:"レイアウト・余白" },
        { key:"typography", name:"文字組み・可読性" },
        { key:"shisen", name:"視線誘導・伝わりやすさ" },
        { key:"click", name:"クリック魅力" },
        { key:"sekaikan", name:"世界観・お題一致" },
      ];

      const COMMENTS = {
        haishoku:{ hi:"テーマカラーが世界観にぴったりで好印象です。", lo:"色数を絞ると、ぐっと締まって見えます。" },
        layout:{ hi:"余白の取り方が上手で、視覚的に安定しています。", lo:"要素の重心が偏り気味。整列をそろえると安定します。" },
        typography:{ hi:"サイズの強弱が明快で、一瞬で読めます。", lo:"主役の文字が背景に埋もれ気味。白フチやコントラストを足すと◎。" },
        shisen:{ hi:"視線が主役→詳細→CTAへ自然に流れています。", lo:"一番見せたい要素を、もう少し大きく・上に置くと伝わります。" },
        click:{ hi:"コピーに惹きが強く、思わず押したくなります。", lo:"ベネフィットや限定感を一言足すと、行動につながります。" },
        sekaikan:{ hi:"ターゲットへのトーンが完璧。世界観の作り込みが見事です。", lo:"お題の印象に、もう一歩トーンを寄せられます。" },
      };

      const WHY = {
        haishoku:"色の印象が世界観を左右するため",
        layout:"余白と配置で第一印象が決まるため",
        typography:"一瞬で読めるかが反応を左右するため",
        shisen:"見てほしい順に視線を導くため",
        click:"行動（クリック）につなげるため",
        sekaikan:"ターゲットに刺さるトーンにするため",
      };

      // 参考デザインのギャラリー集（タイプ別）
      const GALLERIES = [
        { name:"サンコウデザイン", desc:"Webデザインの参考ギャラリー", url:"https://sankoudesign.com/", tags:["Webサイト","LP","バナー"] },
        { name:"LPアーカイブ（rdlp）", desc:"ランディングページ専門の作例集", url:"https://rdlp.jp/lp-archive/", tags:["LP"] },
        { name:"バナー広場", desc:"バナーデザインのまとめ", url:"https://banner-hiroba.com/", tags:["バナー"] },
        { name:"バナーデザインアーカイブ", desc:"いろんなバナーの作例集", url:"https://bannnner.com/", tags:["バナー"] },
        { name:"デザインライブラリー", desc:"バナー・LPなど幅広い作例", url:"http://design-library.jp/", tags:["バナー","LP","Webサイト"] },
        { name:"デザインライブラリー（メルマガ）", desc:"メルマガ・バナーの作例", url:"https://design-library.jp/mailmagazine/", tags:["バナー"] },
        { name:"サムネイルギャラリー", desc:"YouTubeサムネの作例集", url:"https://thumbnail-gallery.net/", tags:["サムネ"] },
        { name:"TVer", desc:"番組サムネの見せ方の参考に", url:"https://tver.jp/", tags:["サムネ"] },
      ];

      const store = {
        get(){
          const d=JSON.parse(localStorage.getItem("bannergym")||"null") || {};
          // 古い保存形式でも壊れないように、足りない項目を補う
          return { count:d.count||0, streak:d.streak||0, lastDay:d.lastDay||"", records:Array.isArray(d.records)?d.records:[] };
        },
        set(s){ try{ localStorage.setItem("bannergym", JSON.stringify(s)); return true; }catch(e){ return false; } },
      };
      let currentOdai=null, uploadedImg=null, currentThumb=null, trendChartObj=null, radarChartObj=null;

      function avgScore(){ const r=store.get().records; return r.length ? Math.round(r.reduce((a,x)=>a+x.total_score,0)/r.length) : 0; }
      function rankOf(avg){ if(avg>=85) return "プロ"; if(avg>=70) return "一人前"; if(avg>=50) return "見習い+"; return "見習い"; }
      function refreshStats(){
        const s=store.get();
        document.getElementById("rankLabel").textContent = rankOf(avgScore());
        document.getElementById("streakLabel").textContent = s.streak;
        document.getElementById("countLabel").textContent = s.count;
        const has = s.records.length>=1;
        document.getElementById("trendCard").style.display = has?"block":"none";
        document.getElementById("historyCard").style.display = has?"block":"none";
        if(has){ drawTrend(s.records); renderHistory(s.records); }
      }

      function go(id){
        document.querySelectorAll(".screen").forEach((e)=>e.classList.remove("active"));
        document.getElementById(id).classList.add("active");
        window.scrollTo({ top:0, behavior:"smooth" });
      }

      function pickOdai(preferLevel){
        let pool = preferLevel ? ODAI.filter((o)=>o.level===preferLevel) : ODAI;
        if(!pool.length) pool = ODAI;
        let choices = pool.filter((o)=>o!==currentOdai);
        if(!choices.length) choices = pool;
        return choices[Math.floor(Math.random()*choices.length)];
      }

      function openOdai(odai){
        currentOdai = odai || pickOdai();
        document.getElementById("clientName").textContent = currentOdai.client;
        document.getElementById("clientMsg").textContent = currentOdai.msg;
        document.getElementById("odaiTitle").textContent = currentOdai.title;
        document.getElementById("sizePill").textContent = currentOdai.brief["サイズ"] || "サイズ自由";
        const badge = document.getElementById("lvBadge");
        badge.className = "level-badge lv"+currentOdai.level;
        badge.textContent = "LV"+currentOdai.level+" "+currentOdai.lvName;
        const t = document.getElementById("briefTable"); t.innerHTML="";
        for(const [k,v] of Object.entries(currentOdai.brief)){
          if(k==="サイズ") continue; // サイズは上のピルで表示済み
          const isMust = currentOdai.must.includes(k);
          t.innerHTML += `<tr><th>${k}${isMust?" ★":""}</th><td class="${isMust?"must":""}">${v}</td></tr>`;
        }
        uploadedImg=null;
        document.getElementById("uploadText").textContent = "📤 クリックして画像をアップロード";
        document.getElementById("submitBtn").disabled = true;
        go("odai");
      }

      // 保存用に画像を小さく圧縮（データを軽く保つ）
      function makeThumb(dataUrl, cb){
        const img=new Image();
        img.onload=()=>{
          const max=360; const scale=Math.min(1, max/Math.max(img.width,img.height));
          const cw=Math.round(img.width*scale), ch=Math.round(img.height*scale);
          const cv=document.createElement("canvas"); cv.width=cw; cv.height=ch;
          cv.getContext("2d").drawImage(img,0,0,cw,ch);
          try{ cb(cv.toDataURL("image/jpeg",0.7)); }catch(e){ cb(dataUrl); }
        };
        img.onerror=()=>cb(dataUrl);
        img.src=dataUrl;
      }

      document.getElementById("fileInput").addEventListener("change",(e)=>{
        const file=e.target.files[0]; if(!file) return;
        const reader=new FileReader();
        reader.onload=(ev)=>{
          uploadedImg=ev.target.result;
          currentThumb=null;
          makeThumb(uploadedImg,(t)=>{ currentThumb=t; });
          document.getElementById("uploadText").innerHTML = `<div style="color:var(--lv1);font-weight:700">✅ アップロード完了</div><img src="${uploadedImg}" alt="提出作品" />`;
          document.getElementById("submitBtn").disabled = false;
        };
        reader.readAsDataURL(file);
      });

      /* =========================================================
         採点（デモ）
         ▼▼▼ 本番ではこの関数を「中継サーバー経由でClaude APIを呼ぶ」処理に差し替える ▼▼▼
      ========================================================= */
      function demoScore(){
        const scores={};
        CATS.forEach((c)=>{ scores[c.key]=Math.floor(45+Math.random()*48); }); // デモ：45〜92点
        const total=Math.round(CATS.reduce((a,c)=>a+scores[c.key],0)/CATS.length);
        // 点数の低い順に並べ、弱点トップ3を改善ポイントに
        const sorted=[...CATS].sort((a,b)=>scores[a.key]-scores[b.key]);
        const weakest=sorted[0].key;
        const spots=[{x:24,y:26},{x:72,y:42},{x:42,y:78}]; // 添削マーカーの位置（デモ用）
        const improvements=sorted.slice(0,3).map((c,i)=>({
          n:i+1, where:c.name, how:COMMENTS[c.key].lo, why:WHY[c.key],
          x:spots[i].x, y:spots[i].y,
        }));
        const good_points=sorted.slice(-2).map((c)=>COMMENTS[c.key].hi);
        return {
          total_score: total, scores, weakest_category: weakest,
          condition_check:{ catchcopy_used:true, theme_color_used:true, cta_present:Math.random()>0.3, size_ok:Math.random()>0.2 },
          good_points, improvements,
          client_voice: total>=80 ? "ガオーッ！やるやないか、見直したで💪 せやけど慢心したらアカン、この調子でいこか！"
            : total>=65 ? "ふむ…悪ないで。せやけど甘いっ！ここ直したらもっと伸びるわ。逃げたらアカンで。"
            : "喝ーーっ！🔥 まだまだ伸びしろだらけやな。けど心配すな、ワシがついとる。もういっちょいこか！",
        };
      }

      async function submitWork(){
        go("scoring");
        const msgs=["コーチが作品をジャッジ中やで…","ふむふむ…どれどれ…","ビシッと添削したるわ！"];
        let i=0; const sm=document.getElementById("scoringMsg");
        const timer=setInterval(()=>{ i=(i+1)%msgs.length; sm.textContent=msgs[i]; },900);
        try {
          const r = await scoreWork();
          clearInterval(timer);
          r.odaiTitle=currentOdai.title; r.client=currentOdai.client; r.level=currentOdai.level; r.lvName=currentOdai.lvName;
          r.thumb=currentThumb||uploadedImg;
          saveRecord(r);
          renderResult(r, false, uploadedImg);
        } catch(err) {
          clearInterval(timer); console.error(err);
          toast("⚠️ エラーやで…もういっぺん試してな"); go("odai");
        }
      }

      // 本物のAI（ローカルサーバー経由）を試す。つながらん時はデモ採点に切り替え。
      async function scoreWork(){
        try {
          const res = await fetch("/api/score", {
            method:"POST", headers:{"Content-Type":"application/json"},
            body: JSON.stringify({ odai: buildOdaiText(currentOdai), image: uploadedImg }),
          });
          if(!res.ok){ const e=await res.json().catch(()=>({})); throw new Error(e.error||("api "+res.status)); }
          const data = await res.json();
          if(data && data.scores){ data.ai=true; return data; }
          throw new Error("bad data");
        } catch(e){
          console.warn("AI採点に接続できへんからデモ採点を使うで:", e.message);
          await new Promise((r)=>setTimeout(r,1200));
          return demoScore();
        }
      }

      function buildOdaiText(o){
        let t = `タイトル: ${o.title}\nタイプ: LV${o.level} ${o.lvName}\nクライアント: ${o.client}\n`;
        for(const [k,v] of Object.entries(o.brief||{})) t += `${k}: ${v}\n`;
        return t;
      }

      function saveRecord(r){
        const s=store.get();
        const beforeRank=rankOf(avgScore());
        const today=new Date().toDateString();
        if(s.lastDay!==today){ s.streak=(s.lastDay?s.streak:0)+1; s.lastDay=today; }
        s.count+=1;
        r.id="r"+Date.now()+Math.floor(Math.random()*1000);
        r.date=Date.now();
        // 保存用レコード（フル画像は持たず、軽いサムネだけ）
        const rec={ id:r.id, date:r.date, odaiTitle:r.odaiTitle, client:r.client, level:r.level, lvName:r.lvName,
          total_score:r.total_score, scores:r.scores, comments:r.comments, weakest_category:r.weakest_category,
          condition_check:r.condition_check, good_points:r.good_points, improvements:r.improvements,
          client_voice:r.client_voice, thumb:r.thumb, ai:r.ai };
        s.records.push(rec);
        if(s.records.length>30) s.records=s.records.slice(-30); // 最大30件
        // 容量オーバー時は古い記録から自動で削る
        while(!store.set(s) && s.records.length>1){ s.records.shift(); }
        refreshStats();
        const afterRank=rankOf(avgScore());
        r._rankUp = beforeRank!==afterRank ? afterRank : null;
      }

      function scoreRankLabel(t){
        if(t>=90) return "プロ級やん！文句なしや💮";
        if(t>=75) return "ええやん！実戦で通用するで";
        if(t>=60) return "あと一歩や。光るもんあるで";
        if(t>=40) return "基礎から見直したら伸びるで";
        return "ナイス挑戦や！ここからが伸びどきやで";
      }

      function renderResult(rec, fromHistory, fullImg){
        document.getElementById("clientVoice").textContent = rec.client_voice;
        document.getElementById("scoreRank").textContent = scoreRankLabel(rec.total_score);

        const cc=rec.condition_check; const checks=document.getElementById("checks"); checks.innerHTML="";
        [["キャッチコピー",cc.catchcopy_used],["テーマカラー",cc.theme_color_used],["CTA",cc.cta_present],["サイズ",cc.size_ok]]
          .forEach(([label,ok])=>{ checks.innerHTML += `<span class="check ${ok?"":"ng"}">${ok?"✓":"✗"} ${label}</span>`; });

        const items=document.getElementById("items"); items.innerHTML="";
        CATS.forEach((c)=>{
          const sc=rec.scores[c.key];
          const cm = (rec.comments && rec.comments[c.key]) ? rec.comments[c.key] : (sc>=75 ? COMMENTS[c.key].hi : COMMENTS[c.key].lo);
          items.innerHTML += `<div class="item"><div class="row"><span class="name">${c.name}</span><span class="sc">${sc}点</span></div><div class="bar"><div data-w="${sc}%"></div></div><div class="cm">${cm}</div></div>`;
        });

        const weakName=CATS.find((c)=>c.key===rec.weakest_category).name;
        document.getElementById("priority").innerHTML = `🔥 <b>コーチの喝：</b>まずは「${weakName}」やで！ここ直したら一気に化けるわ。`;
        document.getElementById("reco").innerHTML = `🦁 <b>次はこれや：</b>お前の伸びしろは「${weakName}」。それ鍛えるお題で出直してきいや！`;

        // 改善ガイド（赤ペン添削）
        document.getElementById("submittedImg").src = fullImg || rec.thumb || "";
        const layer=document.getElementById("annotLayer"); layer.innerHTML="";
        rec.improvements.forEach((im)=>{ const m=document.createElement("div"); m.className="marker"; m.style.left=im.x+"%"; m.style.top=im.y+"%"; m.textContent=im.n; layer.appendChild(m); });
        document.getElementById("goodPoints").innerHTML = "<b>👍 良い点</b><br>"+rec.good_points.map((g)=>"・"+g).join("<br>");
        const gi=document.getElementById("guideItems"); gi.innerHTML="";
        rec.improvements.forEach((im)=>{ gi.innerHTML += `<div class="guide-item"><div class="gnum">${im.n}</div><div class="gtxt"><b>${im.where}</b>：${im.how}<div class="gwhy">なぜ：${im.why}</div></div></div>`; });

        const isAI=!!rec.ai;
        document.getElementById("guideDemoNote").style.display = isAI?"none":"block";
        document.getElementById("bottomDemoNote").style.display = isAI?"none":"block";

        drawRadar(rec.scores);
        go("result");

        const ring=document.getElementById("ringFill");
        const num=document.getElementById("totalScore");
        if(fromHistory){
          ring.style.transition="none";
          ring.style.strokeDashoffset = 402 - (402*rec.total_score/100);
          num.textContent = rec.total_score;
          document.querySelectorAll(".bar > div").forEach((b)=>(b.style.width=b.dataset.w));
        } else {
          ring.style.transition="stroke-dashoffset 1.1s cubic-bezier(.2,.7,.3,1)";
          ring.style.strokeDashoffset=402;
          setTimeout(()=>{
            ring.style.strokeDashoffset = 402 - (402*rec.total_score/100);
            document.querySelectorAll(".bar > div").forEach((b)=>(b.style.width=b.dataset.w));
            let n=0; const step=Math.max(1,Math.ceil(rec.total_score/40));
            const ci=setInterval(()=>{ n+=step; if(n>=rec.total_score){ n=rec.total_score; clearInterval(ci);} num.textContent=n; },24);
          },120);
          if(rec.total_score>=85) confetti();
          if(rec._rankUp){ setTimeout(()=>{ confetti(); toast("🎉 ランクアップや！「"+rec._rankUp+"」になったで！"); }, 1200); }
        }
      }

      function drawRadar(scores){
        const ctx=document.getElementById("radarChart");
        if(radarChartObj) radarChartObj.destroy();
        radarChartObj=new Chart(ctx,{
          type:"radar",
          data:{ labels:CATS.map((c)=>c.name), datasets:[{ label:"今回", data:CATS.map((c)=>scores[c.key]), fill:true, backgroundColor:"rgba(79,93,214,.18)", borderColor:"#4f5dd6", pointBackgroundColor:"#7b5ee0", pointRadius:4 }] },
          options:{ scales:{ r:{ min:0, max:100, ticks:{ stepSize:20, color:"#aab", backdropColor:"transparent" }, grid:{ color:"#e6e8f2" }, angleLines:{ color:"#e6e8f2" }, pointLabels:{ font:{ size:11.5 }, color:"#444" } } }, plugins:{ legend:{ display:false } } },
        });
      }

      function drawTrend(records){
        const ctx=document.getElementById("trendChart");
        if(trendChartObj) trendChartObj.destroy();
        trendChartObj=new Chart(ctx,{
          type:"line",
          data:{ labels:records.map((_,i)=>(i+1)+"本目"), datasets:[{ label:"総合スコア", data:records.map((r)=>r.total_score), borderColor:"#4f5dd6", backgroundColor:"rgba(79,93,214,.12)", fill:true, tension:.35, pointBackgroundColor:"#7b5ee0" }] },
          options:{ scales:{ y:{ min:0, max:100 } }, plugins:{ legend:{ display:false } } },
        });
      }

      // 採点の記録（履歴）
      function renderHistory(records){
        const list=document.getElementById("histList");
        if(!records.length){ list.innerHTML='<div class="hist-empty">まだ記録がありません。</div>'; return; }
        list.innerHTML="";
        [...records].reverse().forEach((rec)=>{
          const d=new Date(rec.date);
          const dstr=`${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;
          const row=document.createElement("div"); row.className="hist-row";
          row.innerHTML=`<img class="hist-thumb" src="${rec.thumb||""}" alt="">
            <div class="hist-info"><div class="hist-title">${rec.odaiTitle||"お題"}</div><div class="hist-meta">LV${rec.level} ${rec.lvName} ・ ${dstr}</div></div>
            <div class="hist-score">${rec.total_score}点</div>
            <button class="hist-del" title="削除">🗑</button>`;
          row.querySelector(".hist-info").addEventListener("click",()=>viewRecord(rec.id));
          row.querySelector(".hist-del").addEventListener("click",(e)=>{ e.stopPropagation(); delRecord(rec.id); });
          list.appendChild(row);
        });
      }
      function viewRecord(id){
        const rec=store.get().records.find((x)=>x.id===id); if(!rec) return;
        currentOdai = ODAI.find((o)=>o.title===rec.odaiTitle) || { title:rec.odaiTitle, client:rec.client, level:rec.level, lvName:rec.lvName, brief:{} };
        renderResult(rec, true, null);
      }
      function delRecord(id){
        if(!confirm("この記録を削除しますか？")) return;
        const s=store.get(); s.records=s.records.filter((x)=>x.id!==id); store.set(s);
        refreshStats(); toast("🗑 記録を消したで");
      }
      function clearAll(){
        if(!confirm("すべての記録を削除しますか？（元に戻せません）")) return;
        const s=store.get(); s.records=[]; store.set(s); refreshStats(); toast("ぜんぶ消したで");
      }

      function nextOdai(){ openOdai(pickOdai()); toast("📩 新しいお題が届いたで！"); }
      function reChallenge(){ openOdai(currentOdai); toast("🔁 同じお題でもういっちょ！"); }
      function openReference(){
        const type = currentOdai ? currentOdai.lvName : "";
        document.getElementById("refSub").textContent = type ? `今のお題「${type}」に合いそうな参考から表示しとるで🦁` : "参考デザインを探そか🦁";
        const list=document.getElementById("refList"); list.innerHTML="";
        // Pinterest（お題のキーワードで検索）
        const b=currentOdai ? currentOdai.brief : {};
        const impression=((b["印象"]||"").split(/[・、(（]/)[0]||"").trim();
        const q=`${type} デザイン ${impression}`.trim();
        list.appendChild(refLinkEl("📌 Pinterestで検索", "「"+q+"」で画像をたくさん見る", "https://www.pinterest.jp/search/pins/?q="+encodeURIComponent(q)));
        const matched=GALLERIES.filter((g)=>g.tags.includes(type));
        const others=GALLERIES.filter((g)=>!g.tags.includes(type));
        if(matched.length){ const h=document.createElement("div"); h.className="ref-cat"; h.textContent="このお題におすすめ"; list.appendChild(h);
          matched.forEach((g)=>list.appendChild(refLinkEl("🎨 "+g.name, g.desc, g.url))); }
        const h2=document.createElement("div"); h2.className="ref-cat"; h2.textContent=matched.length?"そのほかのギャラリー":"ギャラリー一覧"; list.appendChild(h2);
        others.forEach((g)=>list.appendChild(refLinkEl("🎨 "+g.name, g.desc, g.url)));
        document.getElementById("refModal").classList.add("show");
      }
      function refLinkEl(title, desc, url){
        const a=document.createElement("a"); a.className="ref-link"; a.href=url; a.target="_blank"; a.rel="noopener";
        a.innerHTML=`<div><div>${title}</div><div class="rd">${desc}</div></div><div style="color:var(--sub)">›</div>`;
        return a;
      }
      function closeReference(){ document.getElementById("refModal").classList.remove("show"); }

      function toast(msg){
        const t=document.getElementById("toast"); t.textContent=msg; t.classList.add("show");
        clearTimeout(t._tm); t._tm=setTimeout(()=>t.classList.remove("show"),2200);
      }

      function confetti(){
        const colors=["#4f5dd6","#7b5ee0","#ff6b4a","#1fae74","#f0a020","#ef5b5b"];
        for(let i=0;i<70;i++){
          const c=document.createElement("div"); c.className="confetti";
          c.style.left=Math.random()*100+"vw";
          c.style.background=colors[Math.floor(Math.random()*colors.length)];
          c.style.animation=`drop ${1.6+Math.random()*1.2}s linear ${Math.random()*0.3}s forwards`;
          c.style.transform=`rotate(${Math.random()*360}deg)`;
          if(Math.random()>0.5) c.style.borderRadius="50%";
          document.body.appendChild(c);
          setTimeout(()=>c.remove(),3200);
        }
      }

      refreshStats();
