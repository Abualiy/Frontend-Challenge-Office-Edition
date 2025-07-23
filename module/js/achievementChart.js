export const achievementChart = () => {
  const ctx = document
    .getElementById("weeklyAchievementsChart")
    .getContext("2d");
  const weeklyChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          label: "Tasks Completed",
          data: [5, 7, 6, 9, 8],
          backgroundColor: "#007acc",
          borderRadius: 6,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 },
        },
      },
    },
  });
};
