// // Rock Paper Scissors 


// // 3 entities 

// let entities = ["rock", "paper", "scissors"];

// // Make a function computerPlay
// // Computer randomly picks one of the entities

// function computerSelection(options){
//     let index = Math.floor(Math.random()* options.length);
//     return options[index];
// }

// // playerPlay function where player pick one of the entities.

// function playersSelection(options){

//     let answer = prompt("Pick one: rock, paper, scissors").toLowerCase();

//     if(answer == options[0]){
//         answer = options[0];
//     }else if(answer == options[1]){
//         answer = options[1];
//     }else if(answer == options[2]){
//         answer = options[2];
//     }else{
//         answer = "You dont play same game as me!";
//     }
//     return answer;
// }

// // playRound function; 
// // computerPlay gets his choise.
// // playerPlay gets his choise.
// // if the choices are the same : its a tie.;
// // if the choices are differnt: paper wins rock, rock wins scissors, scissors wins paper;
// let compResult = 0;
// let playerResult = 0;

// function playRound(x , y){
//     const computerWins = "Computer Wins! Refresh to play again.";
//     const playerWins = "Player Wins! Refresh to play again.";
//     const itsTie = "It's a tie! Refresh to play again.";

//     if(x == y){
//         return itsTie;
//     }else if(x == "paper" && y == "rock"){
//         compResult++;
//         return computerWins;
//     }else if(x == "rock" && y == "scissors"){
//         compResult++;
//         return computerWins;
//     }else if(x == "scissors" && y == "paper"){
//         compResult++;
//         return computerWins;
//     }else if(x == "paper" && y == "scissors"){
//         playerResult++;
//         return playerWins;
//     }else if(x == "rock" && y == "paper"){
//         playerResult++;
//         return playerWins;
//     }else if(x == "scissors" && y == "rock"){
//         playerResult++;
//         return playerWins;
//     }else{
//         return "Something went wrong. Please refresh the page."
//     }

// }

// function game(){
//    while(compResult < 5 && playerResult <5){
//         console.log(playRound(playersSelection(entities), computerSelection(entities)));
//         console.log("Player: " + compResult);
//         console.log("Computer: " + playerResult);
//    }
// }

// game();

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const btn = document.querySelectorAll('button');

let compResult = 0;
let playerResult = 0;
// Computer Select
let entities = ["rock", "paper", "scissors"];
function computerSelect(options){
    let index = Math.floor(Math.random()* options.length);
    return options[index];
}
btn.forEach((button) =>{
    button.addEventListener('click', () => {
        playRound(playerSelect(), computerSelect(entities));
    })
})
// Player Select

function playerSelect(){
    if(rockBtn.clicked == true){
        return "rock";
    }else if(paperBtn.clicked == true){
        return "paper";
    }else if(scissorsBtn.clicked == true){
        return "scissors";
    }else{
        return "Eror";
    }
}


function playRound(x , y){
    const computerWins = "Computer Wins! Refresh to play again.";
    const playerWins = "Player Wins! Refresh to play again.";
    const itsTie = "It's a tie! Refresh to play again.";

    if(x == y){
        return itsTie;
    }else if(x == "paper" && y == "rock"){
        compResult++;
        return computerWins;
    }else if(x == "rock" && y == "scissors"){
        compResult++;
        return computerWins;
    }else if(x == "scissors" && y == "paper"){
        compResult++;
        return computerWins;
    }else if(x == "paper" && y == "scissors"){
        playerResult++;
        return playerWins;
    }else if(x == "rock" && y == "paper"){
        playerResult++;
        return playerWins;
    }else if(x == "scissors" && y == "rock"){
        playerResult++;
        return playerWins;
    }else{
        return "Something went wrong. Please refresh the page."
    }
}

