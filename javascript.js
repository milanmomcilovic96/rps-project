// Variables //

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const optionsArray = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let result = '';

// Computer Select //

function computerSelect(options){
    let randomIndex = Math.floor(Math.random()* options.length);
    return options[randomIndex];
}

// Event listener call function startGame //

rockBtn.addEventListener('click', () => startGame('rock'));
paperBtn.addEventListener('click', () => startGame('paper'));
scissorsBtn.addEventListener('click', () => startGame('scissors'));

// Check who wins and prints score //

function playRound(player, computer){
    message.textContent = '';
    if(
        player == "rock" && computer == "scissors" ||
        player == "paper" && computer == "rock" ||
        player == "scissors" && computer == "paper"
    ){
        playerScore++;
        div.textContent = 'Player Wins';

    }else if(
        player == "rock" && computer == "paper" ||
        player == "paper" && computer == "scissors" ||
        player == "scissors" && computer == "rock"
    ){
        computerScore++;
        div.textContent = 'Computer Wins';
    }else{
        div.textContent = "It's a tie!";
    }
    playerScoreMsg.textContent = "Player: " + playerScore;
    computerScoreMsg.textContent = "Computer: " + computerScore;
}

// Check is game over? If it's over call reset() //

function isGameOver(){
    if(computerScore == 5 || playerScore == 5){
        div.textContent = "Game Over!";

        reset();

    }
}

// Prints winner and reset score //

function reset(){
    if(computerScore == 5){
        message.textContent = "Computer Wins!";
        
    }else{
        message.textContent = "Player Wins!";
    }

    computerScore = 0;
    playerScore = 0;

}

// Starting game //
function startGame(playerSelection){
    playRound(playerSelection, computerSelect(optionsArray));
    isGameOver();
}


// UI 
const container = document.querySelector('#container');

const div = document.createElement('div');
div.classList.add('div');
container.append(div);


const playerScoreMsg = document.createElement('p');
playerScoreMsg.classList.add('player-score-message');
container.append(playerScoreMsg); 

const computerScoreMsg = document.createElement('p');
computerScoreMsg.classList.add('computer-score-message');
container.append(computerScoreMsg);

const message = document.createElement('p');
message.classList.add('message');
container.append(message);