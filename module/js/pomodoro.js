export const pomodoro = () => {
  let timerInterval;
  let timeLeft = 30 * 60;
  const timerDisplay = document.getElementById("timer");
  const startBtn = document.getElementById("startPomodoro");
  const resetBtn = document.getElementById("resetPomodoro");

  function updateTimerDisplay() {
    const min = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const sec = String(timeLeft % 60).padStart(2, "0");
    timerDisplay.textContent = `${min}:${sec}`;

    if (timeLeft % 2 === 0) {
      timerDisplay.style = "background-color: #3b82f6;";
    } else {
      timerDisplay.style = "background-color: #2563eb;";
    }
  }

  startBtn.addEventListener("click", () => {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        alert("⏰ Time's up! Take a break.");
      }
    }, 1000);
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 30 * 60;
    updateTimerDisplay();
  });

  updateTimerDisplay();
};
