document.addEventListener("DOMContentLoaded", () => {
  // Changing the user name
  const nameInput = document.getElementById("name-input");
  const changeNameBtn = document.getElementById("change-name-btn");
  const userName = document.getElementById("user-name");

  changeNameBtn.addEventListener("click", () => {
    const newName = nameInput.value.trim();
    if (newName) {
      userName.textContent = newName;
      nameInput.value = "";
    }
  });

  // Display random motivational quote
  const quotes = [
    "The best way to predict the future is to create it.",
    "Happiness depends upon ourselves.",
    "Act as if what you do makes a difference. It does.",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "You are never too old to set another goal or to dream a new dream.",
    "Believe you can and you're halfway there.",
    "No matter what you’re going through, there’s a light at the end of the tunnel.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "It’s not whether you get knocked down, it’s whether you get up."
  ];

  const quoteEl = document.getElementById("motivational-quote");
  if (quoteEl) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = `"${randomQuote}"`;
  }

  // Initialize the chart
  const chartElement = document.getElementById("moodChart");
  if (chartElement) {
    const ctx = chartElement.getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        datasets: [
          {
            label: "Mood Score",
            data: [7, 6, 8, 7, 9],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
});
