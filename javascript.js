
let humanScore = 0;
let computerScore = 0;
let games;

function getComputerChoice() {
    let min = 1;
    let max = 3;
    let computerChooseNum = Math.floor(Math.random() * (max - min +1)) + min;
    let computerChoice;

    if (computerChooseNum == 1) {
        console.log('Computer Choosed: Rock');
        return computerChoice = 'Rock';
    } else if (computerChooseNum == 2) {
        console.log('Computer Choosed: Paper');
        return computerChoice = 'Paper';
    } else {
        console.log('Computer Choosed: Scissors');
        return computerChoice = 'Scissors';
    }
}


function getHumanChoice() {
    let userInput = prompt('Choose the next option: Rock, Paper Or Scissors').toLowerCase();
    let humanChoice;
    if (userInput == 'rock') {
        console.log('You Choosed: Rock');
        return humanChoice = 'Rock'
    } else if (userInput == 'paper') {
        console.log('You Choosed: Paper');
        return humanChoice = 'Paper'
    } else if (userInput == 'scissors') {
        console.log('You Choosed: Scissors');
        return humanChoice = 'Scissors'
    } else {
        console.log('Bad Option');
    }
    console.log(humanChoice);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
    console.log('Tie, no one gets score.');
    }
    else if ((humanChoice === 'Rock' && computerChoice === 'Scissors') || (humanChoice === 'Paper' && computerChoice === 'Rock') || (humanChoice === 'Scissor' && computerChoice === 'Paper')) {
        console.log('You Won!');
        humanScore = humanScore + 1;
    }
    else {
        console.log('Computer Won!');
        computerScore = computerScore +1;
    }
   
}



for (i = 0; i <= 4; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);

}


console.log(humanScore);
console.log(computerScore);