const body = document.querySelector("body");

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

const divButtons = document.createElement("div");
divButtons.setAttribute("id","buttons");

body.appendChild(divButtons);
divButtons.appendChild(rockButton);
divButtons.appendChild(paperButton);
divButtons.appendChild(scissorsButton);

let playerChoice;
let computerChoice;

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
    else if (pCompare === "SCISSORS" && cCompare === "SCISSORS") {
        return "Tie!";
    }
    else if (pCompare === "ROCK" && cCompare === "PAPER") {
        return "You Lose! Paper beats Rock";
    }
    else if (pCompare === "PAPER" && cCompare === "PAPER") {
        return "Tie!";
    }
    else if (pCompare === "SCISSORS" && cCompare === "PAPER") {
        return "You Win! Scissors beats Paper";
    }
    else if (pCompare === "ROCK" && cCompare === "ROCK") {
        return "Tie!";
    }
    else if (pCompare === "PAPER" && cCompare === "ROCK") {
        return "You Win! Paper beats Rock";
    }
    else {
        return "You Lose! Rock beats Scissors";
    }
}


/*
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Rock, paper, scissors?");
        computerChoice = getComputerChoice();
        let winLose = playRound(playerChoice, computerChoice);
        console.log(winLose);
        if (winLose.includes("Win")) {
            playerScore++;
        }
        else if (winLose.includes("Lose")) {
            computerScore++;
        }
        console.log("Your Score: ", playerScore);
        console.log("CPU Score: ", computerScore);
    }
    if (playerScore > computerScore) {
        return "Congrats! You Won!";
    }
    else if (playerScore < computerScore) {
        return "You Lost :(";
    }
    else {
        return "It's a Tie.";
    }
}
*/