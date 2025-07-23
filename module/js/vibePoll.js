export const vibePoll = () => {
  const emojiButtons = document.querySelectorAll(".emoji-btn");
  const vibeChartCanvas = document.getElementById("vibePollChart");
  const vibeMsg = document.getElementById("vibePollMessage");

  let voteData = JSON.parse(localStorage.getItem("vibePollVotes")) || {
    "😍": 0,
    "😊": 0,
    "😐": 0,
    "😴": 0,
    "😩": 0,
  };

  const votedEmoji = localStorage.getItem("vibePollVoted");

  if (votedEmoji) {
    vibeMsg.textContent = `✅ You already voted: ${votedEmoji}`;
    emojiButtons.forEach((btn) => (btn.disabled = true));
  }

  emojiButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const vote = btn.dataset.vote;

      if (localStorage.getItem("vibePollVoted")) return;

      voteData[vote]++;
      localStorage.setItem("vibePollVotes", JSON.stringify(voteData));
      localStorage.setItem("vibePollVoted", vote);
      vibeMsg.textContent = `✅ Thanks for voting: ${vote}`;
      btn.disabled = true;
      updateChart();
      emojiButtons.forEach((b) => (b.disabled = true));
    });
  });

  let chart;
  function updateChart() {
    const data = Object.values(voteData);
    const labels = Object.keys(voteData);

    if (chart) chart.destroy();

    chart = new Chart(vibeChartCanvas, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Votes",
            data: data,
            backgroundColor: "#4caf50",
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }

  updateChart();
};
