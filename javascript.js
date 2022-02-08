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
    if(
        player == "rock" && computer == "scissors" ||
        player == "paper" && computer == "rock" ||
        player == "scissors" && computer == "paper"
    ){
        playerScore++;
    }else if(
        player == "rock" && computer == "paper" ||
        player == "paper" && computer == "scissors" ||
        player == "scissors" && computer == "rock"
    ){
        computerScore++;
    }else{
        console.log("It's a tie!");
    }
    console.log("Result:");
    console.log(playerScore);
    console.log(computerScore);
}

// Check is game over? If it's over call reset() //

function isGameOver(){
    if(computerScore == 5 || playerScore == 5){
        console.log("Game Over!!!")
        reset();
    }
}

// Prints winner and reset score //

function reset(){
    if(computerScore == 5){
        console.log("Computer Wins!");
    }else{
        console.log("Player Wins!");
    }
    computerScore = 0;
    playerScore = 0;
}

// Starting game //
function startGame(playerSelection){
    playRound(playerSelection, computerSelect(optionsArray));
    isGameOver();
}