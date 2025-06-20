// Quiz Questions
const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris"
  },
  {
    question: "What planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific"
  },
  {
    question: "Which gas do plants use for photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon Dioxide"
  }
];

function loadQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  quizQuestions.forEach((q, index) => {
    const block = document.createElement("div");
    block.className = "quiz-block";
    block.innerHTML = `<p><strong>${index + 1}. ${q.question}</strong></p>`;
    q.options.forEach(opt => {
      block.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${opt}"/> ${opt}
        </label><br/>
      `;
    });
    container.appendChild(block);
  });
}

function submitQuiz() {
  let score = 0;
  quizQuestions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  const result = document.getElementById("quiz-result");
  result.textContent = `✅ You got ${score} out of ${quizQuestions.length} correct.`;
  result.style.color = score >= 3 ? "green" : "red";
  result.classList.add("show");
}

// Load quiz on page load
window.onload = loadQuiz;

// Weather API Fetch
function getWeather() {
  fetch('https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true')
    .then(response => response.json())
    .then(data => {
      const weather = data.current_weather;
      document.getElementById("weather-output").textContent =
        `🌡 Temp: ${weather.temperature}°C | 🌬 Wind: ${weather.windspeed} km/h`;
    })
    .catch(() => {
      document.getElementById("weather-output").textContent = "⚠️ Error fetching data.";
    });
}
