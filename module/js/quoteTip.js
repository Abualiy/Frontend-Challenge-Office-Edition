export const quoteTip = () => {
  fetch("data/quotes.json")
    .then((res) => res.json())
    .then((quotes) => {
      const random = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById("quoteText").textContent = `${random}`;
    });

  fetch("data/devtips.json")
    .then((res) => res.json())
    .then((tips) => {
      const random = tips[Math.floor(Math.random() * tips.length)];
      document.getElementById("devTipText").textContent = random;
    });
};
