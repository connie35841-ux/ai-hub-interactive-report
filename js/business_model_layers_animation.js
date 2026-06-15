const businessLayers = [
  {
    title: "價值創造",
    status: "已明顯改變",
    accent: "#0e7c7b",
    body: "內容供給效率、資料整理、採訪彙整、標題生成、論點檢查與 AI 協作已經被重塑。"
  },
  {
    title: "價值交付",
    status: "已開始改變",
    accent: "#c28a24",
    body: "SEO／AEO、AI 搜尋入口與內容可見度開始改變媒體被看見的方式。"
  },
  {
    title: "價值擷取",
    status: "尚未證明重組",
    accent: "#c44732",
    body: "廣告、訂閱、會員、課程與活動等收入結構，尚無足夠證據顯示已被 AI Hub 實質改寫。"
  }
];

function initBusinessLayers() {
  const mount = document.getElementById("businessLayers");
  if (!mount) return;
  mount.innerHTML = businessLayers
    .map(
      (layer) => `
        <article class="layer-card" style="--accent:${layer.accent}">
          <h3>${layer.title}</h3>
          <p><strong>${layer.status}</strong></p>
          <p>${layer.body}</p>
        </article>
      `
    )
    .join("");
}

window.addEventListener("load", initBusinessLayers);
