let playerScore = 0;
let computerScore = 0;

const rules = {
  Rock: { beats: "Scissors", losesTo: "Paper" },
  Paper: { beats: "Rock", losesTo: "Scissors" },
  Scissors: { beats: "Paper", losesTo: "Rock" },
};

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    resetWinnerMessage();
    const computerChoice = getComputerChoice();
    const playerChoice = button.id;
    const resultMessage = playRound(playerChoice, computerChoice);
    updateScoreDisplay();
    updateResultMessage(resultMessage);
    checkForWinner();
  });
});

function playRound(playerSelection, computerSelection) {
  if (!rules[playerSelection]) {
    return "Invalid selection!";
  }
  if (playerSelection === computerSelection) {
    return `It's a Tie! ${playerSelection} ties with ${computerSelection}`;
  }
  if (rules[playerSelection].beats === computerSelection) {
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
  else{
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;     
  }
}

function getComputerChoice() {
  const options = Object.keys(rules);
  return options[Math.floor(Math.random() * options.length)];
}

function checkForWinner() {
  if (playerScore >= 5) {
    updateWinnerMessage("PLAYER HAS WON");
    resetScores();
  } else if (computerScore >= 5) {
    updateWinnerMessage("COMPUTER HAS WON");
    resetScores();
  }
}

function updateScoreDisplay() {
  document.getElementById("score").textContent = `Player ${playerScore} - ${computerScore} Computer`;
}

function updateResultMessage(message) {
  document.getElementById("result").textContent = message;
}

function updateWinnerMessage(message) {
  document.getElementById("winner").textContent = message;
}

function resetWinnerMessage() {
  document.getElementById("winner").textContent = "";
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
  updateScoreDisplay();
}
