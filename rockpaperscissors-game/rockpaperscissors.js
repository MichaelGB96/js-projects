function computerPlay() {
    const array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random()*array.length)]
}

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
//         return "Tie! Better luck next time.";
//     } else if (playerSelection.toLowerCase() == "rock") {
//         if (computerSelection == "Paper") {
//             return "You lose! Paper beats Rock."
//         } else {
//             return "You win! Rock beats Scissors."
//         }
//     } else if (playerSelection.toLowerCase() == "paper") {
//         if (computerSelection == "Rock") {
//             return "You win! Paper beats Rock."
//         } else {
//             return "You lose! Scissors beats Paper."
//         }
//     } else if (playerSelection.toLowerCase() == "scissors"){
//         if (computerSelection == "Rock") {
//             return "You lose! Rock beats Scissors."
//         } else {
//             return "You win! Scissors beats Paper."
//         }
//     } else {
//         return "That's not a valid option. Choose again!"
//     }
// }

// function game() {
//     let pScore = 0;
//     let cScore = 0;
//     for (let round = 1; round < 6; round++) {
//         console.log(`------ROUND ${round}------`)
//         const playerSelection = prompt("Choose Rock, Paper or Scissors: ");
//         const computerSelection = computerPlay();
//         console.log("You chose " + capitalize(playerSelection) + ", Computer chose " + computerSelection);
//         playRound(playerSelection, computerSelection);
//         console.log(playRound(playerSelection, computerSelection))

//         if (playRound(playerSelection, computerSelection).slice(0,7) === "You win") {
//             pScore += 1;
//         } else if (playRound(playerSelection, computerSelection).slice(0,8) === "You lose") {
//             cScore += 1;
//         } else if (playRound(playerSelection, computerSelection).slice(0,3) === "Tie") {
//             pScore += 1;
//             cScore += 1;
//         } else { /* Substracting a round when chosing an invalid option */
//             round -= 1;
//         }
//         /* Only showing scores when chosing a valid option */
//         if (playRound(playerSelection, computerSelection).slice(0,2) !== "Th") {
//             console.log("Your score: " + pScore + ", Computer score: " + cScore)
//         }   
//     }
//     if (pScore > cScore) {
//         return "YOU WIN!" 
//     } else if (pScore === cScore) {
//         return "TIE! PLAY AGAIN"
//     } else {
//         return "YOU LOSE!";
//     }
// } 

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissBtn = document.getElementById('scissors');

rockBtn.addEventListener('click', playRound)
paperBtn.addEventListener('click', playRound)
scissBtn.addEventListener('click', playRound)

let outcome = document.querySelector('.outcome');
let selections = document.createElement('p');
let result = document.createElement('p');
let scoreText = document.createElement('p');
let winner = document.createElement('p');
let pScore = 0;
let cScore = 0;

function playRound(e) {  
    const playerSelection = e.target.id;  
    const computerSelection = computerPlay();

    if(outcome.firstElementChild) {
        selections.remove;
        result.remove;
        scoreText.remove;
    }    
    
    selections.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}.`;   
    outcome.appendChild(selections)
    outcome.appendChild(result)   

    if (playerSelection === computerSelection) {
        result.textContent = "Tie! Better luck next time.";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            result.textContent = "You lose! Paper beats Rock.";
            cScore += 1;
        } else {
            result.textContent = "You win! Rock beats Scissors.";
            pScore += 1;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result.textContent = "You win! Paper beats Rock.";
            pScore += 1;
        } else {
            result.textContent = "You lose! Scissors beats Paper.";
            cScore += 1;
        }
    } else if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            result.textContent = "You lose! Rock beats Scissors.";
            cScore += 1;
        } else {
            result.textContent = "You win! Scissors beats Paper.";
            pScore += 1;
        }
    } else {
        result.textContent = "That's not a valid option. Choose again!"
    }

    scoreText.textContent = `Your score: ${pScore}. Computer score ${cScore}.`;
    outcome.appendChild(scoreText);

    if (pScore === 5 || cScore === 5) {
        showWinner(pScore, cScore);
    }
}

function showWinner(pScore, cScore) {
    if (pScore > cScore) {
        winner.textContent = 'You win the war';
    } else {
        winner.textContent = 'You lose the war';
    }   
}

// function capitalize (word) {
//     return word.charAt(0).toUpperCase() + word.slice(1,).toLowerCase();
// }


