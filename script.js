console.log('Rock Paper Scissor \n Rules:\n Rock beats Scissor \n Scissor beats Paper \n Paper beats Rock');

let humanScore = 0;
let computerScore = 0;
// let humanSelection;
// let computerSelection;
let scoreBoard = () => console.log(`Score: \nYou: ${humanScore} \nComputer: ${computerScore}`);

// GET COMPUTER CHOICE
function getComputerChoice() {

    let computerChoice = Math.ceil(Math.random() * 3);

    switch (computerChoice) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper'
            break;
        case 3:
            computerChoice = 'scissor';
            break;
    }
    console.log(`Computer Choose: '${computerChoice}'`);
    return computerChoice
}

//GET HUMAN CHOICE
function getHumanChoice() {

    let humanChoice = +prompt("Hello! Let's Play 'Rock Paper Scissor'.\n 1 for 'Rock' \n 2 for 'Paper' \n 3 for 'Scissor'");

    switch (humanChoice) {
        case 1:
            humanChoice = 'rock';
            break;
        case 2:
            humanChoice = 'paper';
            break;
        case 3:
            humanChoice = 'scissor';
            break;
        default:
            alert('Enter numbers from given options');
    }
    console.log(`You Choose: '${humanChoice}'`)
    return humanChoice;

}

//CHECK FOR WINNER
function playRound(human, computer) {

    if (human == computer) {
        console.log("Draw!");
    } else if (human == 'rock' && computer == 'scissor') {
        console.log("You Win! Rock beats Scissor");
        humanScore++;
    } else if (human == 'paper' && computer == 'rock') {
        console.log("You Win! Paper beats Rock");
        humanScore++;
    } else if (human == 'scissor' && computer == 'paper') {
        console.log("You Win! Scissor beats Paper");
        humanScore++;
    } else {
        console.log("You Loose!");
        computerScore++;
    }
}

//ENTIRE GAME
function playGame() {

    for (let i = 0; i < 5; i++) {
        console.log("Round:", i + 1)
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }
    if (humanScore > computerScore) {
        scoreBoard();
        console.log("You Won The Game! \nReload to play again.")
    } else if (humanScore == computerScore) {
        scoreBoard();
        console.log("This Game is Draw! \nReload to play again")
    } else {
        scoreBoard();
        console.log("You Loose The Game! \nReload to play again.")
    }

}
playGame();


















