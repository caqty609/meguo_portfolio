window.onload = function () {
  const hamburger = document.getElementById("js-hamburger");
  const nav = document.querySelector(".nav_panel");

  // デバッグ用：ボタンがちゃんと見つかっているか確認
  console.log("hamburger element:", hamburger);

  hamburger.addEventListener("click", function () {
    console.log("clicked!"); // クリックされたらコンソールに表示
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("is-active");
  });
  // };

  // お知らせ切り替え（ダミーデータ）
  const notices = [
    { text: "2026.07.01　営業時間変更のお知らせ", url: "#" },
    { text: "2026.06.15　夏季限定メニューのお知らせ", url: "#" },
    { text: "2026.05.01　ゴールデンウィーク営業日のお知らせ", url: "#" },
  ];
  let noticeIndex = 0;

  const noticeLink = document.querySelector(".notice_link");
  const prevBtn = document.querySelector(".notice_prev");
  const nextBtn = document.querySelector(".notice_next");

  function renderNotice() {
    noticeLink.textContent = notices[noticeIndex].text;
    noticeLink.href = notices[noticeIndex].url;
  }

  prevBtn.addEventListener("click", function () {
    noticeIndex = (noticeIndex - 1 + notices.length) % notices.length;
    renderNotice();
  });

  nextBtn.addEventListener("click", function () {
    noticeIndex = (noticeIndex + 1) % notices.length;
    renderNotice();
  });
};
