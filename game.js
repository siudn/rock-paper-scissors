/// Variables
let playerScore = 0;
let computerScore = 0;

/// HTML Elements
const body = document.querySelector("body");

const divButtons = document.createElement("div");
divButtons.setAttribute("id","buttons");

const rockButton = document.createElement("button");
rockButton.classList.add("button");
rockButton.setAttribute("id","rock");
rockButton.textContent = "Rock";

const paperButton = document.createElement("button");
paperButton.classList.add("button");
paperButton.setAttribute("id","paper");
paperButton.textContent = "Paper";

const scissorsButton = document.createElement("button");
scissorsButton.classList.add("button");
scissorsButton.setAttribute("id","scissors");
scissorsButton.textContent = "Scissors";

const divResults = document.createElement("div")
divResults.setAttribute("id","results");

const displayedPlayerScore = document.createElement("p");
displayedPlayerScore.classList.add("score");
displayedPlayerScore.textContent = `Your Score: `;

const displayedComputerScore = document.createElement("p");
displayedComputerScore.classList.add("score");
displayedComputerScore.textContent = `CPU Score: `;

const displayWinner = document.createElement("p");
displayWinner.classList.add("result");

/// Button Functionalities
rockButton.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5) {
        score(playRound("Rock", getComputerChoice()));
        displayedPlayerScore.textContent = `Your Score: ${playerScore}`;
        displayedComputerScore.textContent = `CPU Score: ${computerScore}`;
    }
})
paperButton.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5) {
        score(playRound("Paper", getComputerChoice()));
        displayedPlayerScore.textContent = `Your Score: ${playerScore}`;
        displayedComputerScore.textContent = `CPU Score: ${computerScore}`;
    }
})
scissorsButton.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5) {
        score(playRound("Scissors", getComputerChoice()));
        displayedPlayerScore.textContent = `Your Score: ${playerScore}`;
        displayedComputerScore.textContent = `CPU Score: ${computerScore}`;
    }
})

/// DOM Tree
body.appendChild(divButtons);
divButtons.appendChild(rockButton);
divButtons.appendChild(paperButton);
divButtons.appendChild(scissorsButton);

body.appendChild(divResults);
divResults.appendChild(displayedPlayerScore);
divResults.appendChild(displayedComputerScore);
divResults.appendChild(displayWinner);

/// Functions
function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
        return "Rock";
    }
    else if (x === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let pCompare = playerSelection.toUpperCase();
    let cCompare = computerSelection.toUpperCase();
    if (pCompare === "ROCK" && cCompare === "SCISSORS") {
        return "You Win! Rock beats Scissors";
    }
    else if (pCompare === "PAPER" && cCompare === "SCISSORS") {
        return "You Lose! Scissors beats Paper";
    }
    else if (pCompare === "ROCK" && cCompare === "PAPER") {
        return "You Lose! Paper beats Rock";
    }
    else if (pCompare === "SCISSORS" && cCompare === "PAPER") {
        return "You Win! Scissors beats Paper";
    }
    else if (pCompare === "PAPER" && cCompare === "ROCK") {
        return "You Win! Paper beats Rock";
    }
    else if (pCompare === "SCISSORS" && cCompare === "ROCK") {
        return "You Lose! Rock beats Scissors";
    }
    else {
        return "Tie!";
    }
}

function score(result) {
    if (result.includes("Win")) {
        playerScore++;
    }
    else if (result.includes("Lose")) {
        computerScore++;
    }
}
