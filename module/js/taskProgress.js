export const taskProgress = () => {
  const canvas = document.getElementById("taskProgressChart");
  const ctx2 = canvas.getContext("2d");
  const statsText = document.getElementById("taskStats");

  const TASK_STORAGE_KEY = "todayTasks";

  function drawProgressChart(done, total) {
    const percent = total ? done / total : 0;
    const angle = percent * 2 * Math.PI;

    ctx2.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx2.beginPath();
    ctx2.arc(150, 150, 100, 0, 2 * Math.PI);
    ctx2.fillStyle = "#eee";
    ctx2.fill();

    // Foreground
    ctx2.beginPath();
    ctx2.moveTo(150, 150);
    ctx2.arc(150, 150, 100, 0, angle);
    ctx2.fillStyle = "#4caf50";
    ctx2.fill();

    // Inner white
    ctx2.beginPath();
    ctx2.arc(150, 150, 70, 0, 2 * Math.PI);
    ctx2.fillStyle = "#fff";
    ctx2.fill();

    // Text
    ctx2.fillStyle = "#333";
    ctx2.font = "bold 20px sans-serif";
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillText(`${Math.round(percent * 100)}%`, 150, 150);

    statsText.textContent = `${done} of ${total} tasks completed`;
  }

  function saveTaskStates() {
    const tasks = [...document.querySelectorAll(".task-check")].map((cb, index) => ({
      index,
      checked: cb.checked,
    }));
    localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks));
  }

  function loadTaskStates() {
    const saved = JSON.parse(localStorage.getItem(TASK_STORAGE_KEY) || "[]");
    saved.forEach(({ index, checked }) => {
      const cb = document.querySelectorAll(".task-check")[index];
      if (cb) cb.checked = checked;
    });
  }

  function updateProgressFromCheckboxes() {
    const checks = document.querySelectorAll(".task-check");
    const total = checks.length;
    const done = [...checks].filter((cb) => cb.checked).length;
    drawProgressChart(done, total);
    saveTaskStates(); // Save current state
  }

  loadTaskStates(); // First load
  document.querySelectorAll(".task-check").forEach((cb) => {
    cb.addEventListener("change", updateProgressFromCheckboxes);
  });

  updateProgressFromCheckboxes(); // Init chart
};
