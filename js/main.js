const mythFeedback = {
  true: "正解：本案核心不是 AI 取代記者，而是 AI 被嵌入採編流程，成為智慧協作平台。",
  partial: "接近，但還不完整：AI Hub 確實提升效率，但重點是它把多個採編節點制度化。",
  false: "這正是本報告要拆解的迷思：AI Hub 目前不能被簡化成自動寫稿機或成熟新營收產品。"
};

const quizItems = [
  {
    question: "哪一項最能描述 AI Hub 目前最明確的影響？",
    options: ["取代記者寫完整新聞", "加速前處理與中介工序", "直接成為主要收入來源"],
    answer: 1
  },
  {
    question: "公司官方 AI 與個人 AI 並行，代表什麼？",
    options: ["組織治理仍在形成中", "公司 AI 已完全失敗", "記者不需要人工審核"],
    answer: 0
  },
  {
    question: "AEO 可見度提高，最需要避免哪個推論？",
    options: ["內容可能更容易被答案引擎引用", "搜尋入口正在改變", "引用一定等於變現"],
    answer: 2
  }
];

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

function initQuiz() {
  const mount = document.getElementById("quizMount");
  const check = document.getElementById("checkQuiz");
  const feedback = document.getElementById("quizFeedback");
  mount.innerHTML = quizItems
    .map(
      (item, index) => `
        <fieldset class="quiz-item">
          <p>${index + 1}. ${item.question}</p>
          <div class="quiz-options">
            ${item.options
              .map(
                (option, optionIndex) => `
                  <label>
                    <input type="radio" name="quiz-${index}" value="${optionIndex}" />
                    <span>${option}</span>
                  </label>
                `
              )
              .join("")}
          </div>
        </fieldset>
      `
    )
    .join("");

  check.addEventListener("click", () => {
    let score = 0;
    quizItems.forEach((item, index) => {
      const selected = document.querySelector(`input[name="quiz-${index}"]:checked`);
      if (selected && Number(selected.value) === item.answer) score += 1;
    });
    feedback.textContent =
      score === quizItems.length
        ? "判斷清楚：你已分清流程改善、治理形成、入口改變與收入結構重組。"
        : `你答對 ${score} / ${quizItems.length} 題。再回到上方三個證據層，檢查哪些推論還太快。`;
  });
}

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("load", () => {
  updateProgress();
  initMythQuiz();
  initGovernanceRange();
  initQuiz();
});
