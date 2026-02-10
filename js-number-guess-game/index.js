// Generate random number (1–10)
let randomNum = Math.floor(Math.random() * 10) + 1;

// Get DOM elements
const message = document.getElementById('message');
const playAgainButton = document.getElementById('playAgainButton');

// Function to start the game
function startGame() {
  // Take user guess using prompt
  const userGuess = prompt("Guess a number between 1 and 10:");
  
  // Check if user clicked Cancel or entered invalid input
  if (userGuess === null) {
    message.textContent = "Game cancelled!";
    message.className = "message-low"; // Apply error styling
    return;
  }
  
  const numGuess = parseInt(userGuess);
  
  // Validate input
  if (isNaN(numGuess) || numGuess < 1 || numGuess > 10) {
    message.textContent = "Please enter a valid number between 1 and 10";
    message.className = "message-low"; // Apply error styling
    setTimeout(startGame, 1500); // Ask again after 1.5 seconds
    return;
  }
  
  // Check the guess
  if (numGuess < randomNum) {
    message.innerHTML = "Too low! Try a higher number.";
    message.className = "message-low"; // Apply low styling
    setTimeout(startGame, 1500); // Ask again after 1.5 seconds
  } else if (numGuess > randomNum) {
    message.innerHTML = "Too high! Try a lower number.";
    message.className = "message-high"; // Apply high styling
    setTimeout(startGame, 1500); // Ask again after 1.5 seconds
  } else {
    message.innerHTML = `🎉 Congratulations! You guessed the number ${randomNum}`;
    message.className = "message-correct correct-animation"; // Apply correct styling with animation
    playAgainButton.style.display = "block";
  }
}

// Start the game when page loads
startGame();

// Event listener for the play again button
playAgainButton.addEventListener('click', function() {
  // Reset game
  randomNum = Math.floor(Math.random() * 10) + 1;
  message.textContent = "Enter your guess in the prompt dialog that will appear.";
  message.className = ""; // Remove any styling classes
  playAgainButton.style.display = "none";
  startGame(); // Start a new game
});

