let humanScore = 0;
let computerScore = 0;
const scoreList = document.querySelector(".scoreList");

function getComputerChoice() {
    let randNum = (Math.floor(Math.random() * 3));
    if (randNum === 2) {
        return "rock"
    } else if (randNum === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        humanScore++;
        computerScore++;
        return "Tie! You both chose the same choice"
    } else if ((humanChoice == "rock") && (computerChoice == "scissors")) {
        humanScore++;
        return "You win! Rock beats scissors"
    } else if (humanChoice == "rock") {
        computerScore++;
        return "You lose! Paper beats rock"
    } else if (humanChoice == "paper" && (computerChoice == "rock")) {
        humanScore++;
        return "You win! Paper beats rock"
    } else if (humanChoice == "paper") {
        computerScore++;
        return "You lose! Scissors beats paper"
    } else if (humanChoice == "scissors" && (computerChoice == "paper")) {
        humanScore++;
        return "You win! Scissors beats paper"
    } else {
        computerScore++;
        return "You lose! Rock beats scissors"
    }
}

function updateScore() {
    let roundContainer = document.createElement("li"); // check that all methods exist
    let displayHuman = document.createElement("div");
    let displayComputer = document.createElement("div");
    displayHuman.textContent = humanScore;
    displayComputer.textContent = computerScore;
    roundContainer.appendChild(displayHuman);
    roundContainer.appendChild(displayComputer);
    scoreList.appendChild(roundContainer);
    if ((humanScore == 5) || (computerScore == 5)) {
        winner();
    }
}

function winner() {
    let victor; // Variables created WITHIN an if can only be used inside
    const message = document.createElement("h1");
    const body = document.querySelector("body");
    const scoreboard = document.querySelector(".scoreboard");

    if (humanScore >= computerScore) {
        victor = "You win!";
    } else {victor = "You lose :(";}
    message.textContent = `Score: ${humanScore} to ${computerScore}. ${victor}`;
    document.body.insertBefore(message, scoreboard); // syntax? DON'T FORGET ;;;;;;;
}

const btnList = document.querySelectorAll(".btn");
btnList.forEach((currentBtn) => {
    currentBtn.addEventListener("click", function (e) {
        console.log(playRound(String(currentBtn.textContent).toLowerCase(), getComputerChoice()));
        console.log(String(currentBtn.textContent));
        updateScore();
    }); 
});