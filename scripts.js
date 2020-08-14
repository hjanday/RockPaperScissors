//define array and random values
//first to 5 wins

let randValue; 
let possibleChoices = ["rock", "paper", "scissors"];
let playerChoice;
let computerChoice;  

let userScore = 0;
let computerScore = 0;

printRock = () => document.getElementById("outcome").innerHTML = "This is rock"
printScissors = () => document.getElementById("outcome").innerHTML = "This is scissors"
printPaper = () => document.getElementById("outcome").innerHTML = "This is paper"


/*for(let i = 0;i<20;i++) {
function game() {




for(let i = 0;i<20;i++) {
function game() {



playerChoice = prompt("rock, paper or scissors?");
randValue = Math.floor(Math.random()*3);
computerChoice = (possibleChoices[randValue]);


document.getElementById("outcome").innerHTML = `You chose ${playerChoice} and computer chose ${computerChoice}`;
document.getElementById("points").innerHTML = `User Score = ${userScore}  |   Computer Score = ${computerScore}`;

if(computerChoice == "rock" && playerChoice == "scissors") {
    computerScore++;
    document.getElementById("points").innerHTML = `User Score = ${userScore}  |   Computer Score = ${computerScore}`;
}

else if(computerChoice == "rock" && playerChoice == "paper") {
    userScore++;
    document.getElementById("points").innerHTML = `User Score = ${userScore}  |   Computer Score = ${computerScore}`;
}



else if(computerChoice == "paper" && playerChoice == "scissors") {
    userScore++;
    document.getElementById("points").innerHTML = `User Score = ${userScore}  |   Computer Score = ${computerScore}`;
}
else if(computerChoice == "paper" && playerChoice == "rock") {
    computerScore++;
    document.getElementById("points").innerHTML = `User Score = ${userScore}  |   Computer Score = ${computerScore}`;
}


else if(computerChoice == "scissors" && playerChoice == "rock") {
    userScore++;
    document.getElementById("points").innerHTML = `User Score = ${userScore}  |   Computer Score = ${computerScore}`;
}

else if(computerChoice == "scissors" && playerChoice == "paper") {
    computerScore++;
    document.getElementById("points").innerHTML = `User Score = ${userScore}  |   Computer Score = ${computerScore}`;
}
else{

}


if(userScore == 5){
alert("User wins!");

}
else if(computerScore == 5) {
    alert("Computer Wins!");
  
}
else{



}
}
*/
