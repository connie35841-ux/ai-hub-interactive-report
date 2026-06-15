const workflowSteps = [
  {
    name: "資料蒐集",
    agent: "採訪全紀鹿",
    insight: "協助整理訪談材料、逐字稿與背景資訊，減少前處理時間。"
  },
  {
    name: "準備題目方向",
    agent: "議題發想雞",
    insight: "協助找趨勢、補盲點、提出可能角度，但最後選題仍由人判斷。"
  },
  {
    name: "寫稿",
    agent: "論點分析獅",
    insight: "協助檢查論點結構與段落推進，不等於直接生成可發布新聞。"
  },
  {
    name: "核稿",
    agent: "數據檢查猿",
    insight: "協助比對數字、資料來源與論證一致性，降低人工反覆查核成本。"
  },
  {
    name: "改稿",
    agent: "標題超吸鯨",
    insight: "協助標題、開場與可讀性優化，讓內容更適合數位通路。"
  },
  {
    name: "審稿",
    agent: "人工審核閘門",
    insight: "AI 可以輔助，但發布前仍需編輯與記者負責查證、判斷與修訂。"
  },
  {
    name: "發通路",
    agent: "AEO 流量密馬",
    insight: "協助 SEO／AEO 建議，讓內容更可能被搜尋與答案引擎辨識。"
  }
];

function initWorkflowStepper() {
  const mount = document.getElementById("workflowStepper");
  const insight = document.getElementById("workflowInsight");
  if (!mount || !insight) return;

  mount.innerHTML = workflowSteps
    .map(
      (step, index) => `
        <button class="step-button ${index === 0 ? "active" : ""}" data-step="${index}">
          <span>${index + 1}</span>
          <span><strong>${step.name}</strong><br />${step.agent}</span>
        </button>
      `
    )
    .join("");

  insight.textContent = workflowSteps[0].insight;

  mount.addEventListener("click", (event) => {
    const button = event.target.closest(".step-button");
    if (!button) return;
    mount.querySelectorAll(".step-button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    insight.textContent = workflowSteps[Number(button.dataset.step)].insight;
  });
}

window.addEventListener("load", initWorkflowStepper);
