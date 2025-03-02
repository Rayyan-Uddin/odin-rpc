//GLOBAL VARIABLES
let rounds = 0;
let humanScore = 0;
let computerScore = 0;
let roundsDiv = document.querySelector('#rounds');
let choiceDiv = document.querySelector('#computerChoice');
let humanPointsDiv = document.querySelector('#humanScore');
let computerPointsDiv = document.querySelector('#computerScore');
let announcmentDiv = document.querySelector('#roundAnnouncement');
let headForRules = document.querySelector('#head');
const BTN_ROCK = document.querySelector('#rock');
const BTN_PAPER = document.querySelector('#paper');
const BTN_SCISSOR = document.querySelector('#scissor');

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
        return "Round Draw!";
    } else if (
        (human == 'rock' && computer == 'scissor') ||
        (human == 'paper' && computer == 'rock') ||
        (human == 'scissor' && computer == 'paper')
    ) {
        humanScore++;
        return "You Win!";
    } else {
        computerScore++;
        return "Computer Wins!";
    }
}

//ENTIRE GAME
function playGame(humanSelection) {

    let computerSelection = getComputerChoice();
    let gameWinner = playRound(humanSelection, computerSelection);
    rounds++;
    roundsDiv.textContent = `Round : ${rounds}`;
    choiceDiv.textContent = 'Computer Choose : ' + computerSelection;;
    humanPointsDiv.textContent = `Your Score :  ${humanScore}`;
    computerPointsDiv.textContent = `Computer Score :  ${computerScore}`;
    announcmentDiv.textContent = gameWinner;

    if (humanScore == 5) {
        reset("Won");
    } else if (computerScore == 5) {
        reset("Lost");
    }
}

function reset(a) {
    alert(`You ${a} the Game!`);
    humanScore = 0;
    computerScore = 0;
    rounds = 0;
    roundsDiv.textContent = `Round :`;
    choiceDiv.textContent = `Computer Choose :`;
    humanPointsDiv.textContent = `Your Score :`;
    computerPointsDiv.textContent = `Computer Score :`;
}

// EVENTS
BTN_ROCK.onclick = () => {
    playGame('rock');

}
BTN_PAPER.onclick = () => {
    playGame('paper');

}
BTN_SCISSOR.onclick = () => {
    playGame('scissor');
}

headForRules.onclick = () => {
    alert('Rock Paper Scissor \n Rules:\n Rock beats Scissor \n Scissor beats Paper \n Paper beats Rock');
}






































