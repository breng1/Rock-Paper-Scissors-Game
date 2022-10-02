// script.js

// Plays five rounds of RPS, keeps track of score, and displays winner
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // Play five rounds of RPS
    for (let i = 0; i < 5; i++) {
        // Prompt user for input
        // Generate commputer choice
        // Play single round
        // Update scores
        // Display current scores
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
