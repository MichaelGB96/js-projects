function computerPlay() {
    const array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random()*array.length)]
}

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
        hideBtns()
        sayWinner()
        tryAgain()
    };
}

function sayWinner() {
    outcome.appendChild(winner)
    if (pScore > cScore) {
        winner.textContent = 'You win the war';
    } else {
        winner.textContent = 'Computer wins the war';
    }   
}

function hideBtns() {
    rockBtn.style.display = 'none';
    paperBtn.style.display = 'none';
    scissBtn.style.display = 'none';
}

function tryAgain() {
    let tryAgainBtn = document.createElement('button');
    tryAgainBtn.textContent = 'Try again';
    outcome.appendChild(tryAgainBtn);
    tryAgainBtn.addEventListener('click', resetGame);
}

function resetGame() {
    outChild = outcome.children;
    while (outcome.firstElementChild) {
        outcome.removeChild(outChild[0])
    }
    pScore = 0;
    cScore = 0;
    rockBtn.style.display = 'inline';
    paperBtn.style.display = 'inline';
    scissBtn.style.display = 'inline';
}
