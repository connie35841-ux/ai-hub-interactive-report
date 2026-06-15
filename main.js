const mythFeedback = {
  true: "正解：本案核心不是 AI 取代記者，而是 AI 被嵌入採編流程，成為智慧協作平台。",
  partial: "接近，但還不完整：AI Hub 確實提升效率，但重點是它把多個採編節點制度化。",
  false: "這正是本報告要拆解的迷思：AI Hub 目前不能被簡化成自動寫稿機或成熟新營收產品。"
};



function updateProgress() {
  const progress = document.getElementById("readProgress");
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = height > 0 ? window.scrollY / height : 0;
  progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
}

function initMythQuiz() {
  const choices = document.querySelectorAll('[data-quiz="myth"] .choice');
  const feedback = document.getElementById("mythFeedback");
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      choices.forEach((item) => item.classList.remove("correct", "wrong"));
      const value = choice.dataset.correct;
      choice.classList.add(value === "true" || value === "partial" ? "correct" : "wrong");
      feedback.textContent = mythFeedback[value];
    });
  });
}

function initGovernanceRange() {
  const range = document.getElementById("governanceRange");
  const value = document.getElementById("rangeValue");
  if (!range || !value) return;
  range.addEventListener("input", () => {
    const company = Number(range.value);
    value.textContent = `公司 AI ${company}% / 個人 AI ${100 - company}%`;
  });
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("load", () => {
  updateProgress();
  initMythQuiz();
  initGovernanceRange();
});
