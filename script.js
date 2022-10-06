// script.js

// Randomly returns 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    // Generate random number between 0 and 2
    index = Math.floor(Math.random() * 3);
    return choices[index];
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
    // Track running scores
    let playerScore = 0;
    let computerScore = 0;
    let gameoverMessage = '';
   
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function(button){
        button.addEventListener('click', function(){
            // Reset game after game ends
            if (playerScore === 5 || computerScore === 5) {
                playerScore = 0;
                computerScore = 0;
                document.querySelector('.game-message').textContent = '';
            }

            // Play Round
            let computerSelection = getComputerChoice();
            document.querySelector('.computer-choice').textContent = computerSelection;

            let playerSelection = this.value;
            document.querySelector('.player-choice').textContent = playerSelection;

            let roundResult = playRound(playerSelection, computerSelection);

            
            // Update score and round result
            let roundMessage;

            if (roundResult === 'win') {
                playerScore++;
                roundMessage = `You Win! ${playerSelection} beats ${computerSelection}.`;
            }   
            else if (roundResult === 'loss') {
                computerScore++;
                roundMessage = `You Lose. ${computerSelection} beats ${playerSelection}.`;
            }
            else if (roundResult === 'tie') {
                roundMessage = `It's a tie!`;
            } 

            // Display score and round result
            document.querySelector('.player-score').textContent = playerScore;
            document.querySelector('.computer-score').textContent = computerScore;
            document.querySelector('.round-message').textContent = roundMessage;

            //Display gameover message 
            if (computerScore === 5 && playerScore === 5) {
                document.querySelector('.game-message').textContent = "Game Over. It's a tie.";
            }
            else if (playerScore === 5) {
                document.querySelector('.game-message').textContent = "Game Over. You won!";
            }
            else if (computerScore === 5) {
                document.querySelector('.game-message').textContent ="Game Over. You lost. :(";
            }


        })
    });

};

game();