function computerPlay() {
    let random = Math.random();
    let result;
    if (random < 1/3 ) {
        return result = "Rock"
    } else if (random < 2/3) {
        return result = "Paper"
    } else {
        return result = "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return "Tie! Play again.";
    } else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "Paper") {
            return "You lose! Paper beats Rock."
        } else {
            return "You win! Rock beats Scissors"
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "Rock") {
            return "You win! Paper beats Rock."
        } else {
            return "You lose! Scissors beats Paper"
        }
    } else if (playerSelection.toLowerCase() == "scissors"){
        if (computerSelection == "Rock") {
            return "You lose! Rock beats Scissors."
        } else {
            return "You win! Scissors beats Paper"
        }
    } else {
        return "That's not a valid option. Choose again!"
    }
}

function game() {
    let pScore = 0;
    let cScore = 0;
    for (let round = 1; round < 6; round++) {
        console.log(`------ROUND ${round}------`)
        const playerSelection = prompt("Choose Rock, Paper or Scissors: ");
        const computerSelection = computerPlay();
        console.log("You chose " + capitalize(playerSelection) + ", Computer chose " + computerSelection);
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection))

        if (playRound(playerSelection, computerSelection).slice(0,7) === "You win") {
            pScore += 1;
        } else if (playRound(playerSelection, computerSelection).slice(0,8) === "You lose") {
            cScore += 1;
        } else if (playRound(playerSelection, computerSelection).slice(0,3) === "Tie") {
            pScore += 1;
            cScore += 1;
        } else { /* Substracting a round when chosing an invalid option */
            round -= 1;
        }
        /* Only showing scores when chosing a valid option */
        if (playRound(playerSelection, computerSelection).slice(0,2) !== "Th") {
            console.log("Your score: " + pScore + ", Computer score: " + cScore)
        }   
    }
    if (pScore > cScore) {
        return "YOU WIN!" 
    } else if (pScore === cScore) {
        return "TIE! PLAY AGAIN"
    } else {
        return "YOU LOSE!";
    }
} 

function capitalize (word) {
    let initialUppCase = word.toUpperCase().slice(0,1)
    let lowCaseRest = word.toLowerCase().slice(1,);
    return initialUppCase + lowCaseRest
}

