const guessInput = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const message = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const highscoreElement = document.querySelector(".highscore");
const againButton = document.querySelector(".again");
const body = document.querySelector("body");
const numberElement = document.querySelector(".number");

let secretNumber = generateRandomNumber();
let score = 0;
let highscore = 0;

function generateRandomNumber() {
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  console.log(secretNumber);
  return secretNumber;
}

checkButton.addEventListener("click", function () {
  const guess = Number(guessInput.value);

  // Check if the guess is correct
  if (guess === secretNumber) {
    message.textContent = "🎉 Correct number!";
    score++;
    body.style.backgroundColor = "#60b347";
    numberElement.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  } else if (guess < secretNumber) {
    message.textContent = "📉 Too low!";
  } else if (guess > secretNumber) {
    message.textContent = "📈 Too high!";
  }

  scoreElement.textContent = score;

  guessInput.value = "";
});

againButton.addEventListener("click", function () {
  guessInput.value = "";
  secretNumber = generateRandomNumber();
  body.style.backgroundColor = "#222";
  numberElement.textContent = "?";
});
