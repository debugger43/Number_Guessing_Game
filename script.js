let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const resetButton = document.getElementById("resetButton");

guessButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);

function checkGuess() {
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}. You guessed it in ${attempts} tries.`;
  } else if (guess < secretNumber) {
    message.textContent = "Too low! Try again.";
  } else {
    message.textContent = "Too high! Try again.";
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.textContent = "";
  attemptsDisplay.textContent = "Attempts: 0";
  guessInput.value = "";
}
