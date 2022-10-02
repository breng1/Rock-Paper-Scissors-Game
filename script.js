// script.js

// Randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    // Generate random number between 0 and 2
    index = Math.floor(Math.random() * 3);
    return choices[index];
}

// Prompts user and returns choice in CamelCase
function getPlayerChoice() {
    let playerSelection = prompt("Enter 'Rock', 'Paper', or 'Scissors':");
    return(playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase());
}

// Plays single round of Rock, Paper Scissors, returning the result ('tie', 'win' or 'loss')
function playRound(playerSelection, computerSelection) {
        // Compare player and computer selections
        switch (true) {
            case (playerSelection == computerSelection):
                return 'tie';
            case (playerSelection == "Rock" && computerSelection == "Scissors"):
                return 'win';
            case (playerSelection == "Rock" && computerSelection == "Paper"):
                return 'loss';
            case (playerSelection == "Paper" && computerSelection == "Rock"):
                return 'win';
            case (playerSelection == "Paper" && computerSelection == "Scissors"):
                return 'loss';
            case (playerSelection == "Scissors" && computerSelection == "Paper"):
                return 'win';
            case (playerSelection == "Scissors" && computerSelection == "Rock"):
                return 'loss';
        }    
}


// Plays five rounds of RPS, keeps track of score, and displays winner
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // Play five rounds of RPS
    for (let i = 0; i < 5; i++) {

        // Play round
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        
        // Update scores and display round results
        if (roundResult == 'win') {
            playerScore++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
        }   
        else if (roundResult == 'loss') {
            computerScore++;
            console.log(`You Lose. ${computerSelection} beats ${playerSelection}.`);
        } 
        else if (roundResult == 'tie') {
            console.log(`It's a tie.`);
        }

        // Display current scores
        console.log(`Your Score: ${playerScore}\t Computer Score: ${computerScore}`);
    }

    // Display final game results
    if (playerScore > computerScore) {
        console.log("Game Over. You won!");
    }
    else if (computerScore > playerScore){
        console.log("Game Over. You lost.");
    }
    else {
        console.log("Game Over. It's a tie!");
    }
};