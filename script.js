let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randNum = (Math.random() * 3);
    if (randNum <= 2) {
        return "rock"
    } else if (randNum <= 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = window.prompt("Enter one of: Rock, paper, scissors");
    return ((String(choice)).toLowerCase())
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

function playGame() {
    for (let i = 0; i < 5; i ++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        console.log("Your score: " + String(humanScore) + "\nComputer's score: " + String(computerScore));
    }
}

playGame();