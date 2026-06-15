const pathCopy = {
  seo: {
    title: "傳統 SEO 路徑",
    body: "使用者搜尋，點進網站，媒體取得廣告曝光或訂閱轉換機會。"
  },
  aeo: {
    title: "AEO／AI Answer Engine 路徑",
    body: "使用者提問，AI 整理答案，媒體可能被引用或摘要，但使用者未必回到原站。"
  }
};

function initAeoToggle() {
  const buttons = document.querySelectorAll(".segmented [data-mode]");
  const explainer = document.getElementById("pathExplainer");
  if (!buttons.length || !explainer) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-selected", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      const copy = pathCopy[button.dataset.mode];
      explainer.innerHTML = `<h4>${copy.title}</h4><p>${copy.body}</p>`;
    });
  });
}

window.addEventListener("load", initAeoToggle);
