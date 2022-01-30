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
let pBoard = document.createElement('div');
let cBoard = document.createElement('div');
let pBoardLabel= document.createElement('p');
let cBoardLabel = document.createElement('p');
let pScoreText = document.createElement('p');
let cScoreText = document.createElement('p');
let pSelection = document.createElement('p');
let cSelection = document.createElement('p');
let result = document.createElement('p');
let winner = document.createElement('p');
winner.className = 'winnerText';
let pScore = 0;
let cScore = 0;
let count = 0;

const Emojis = {
    rock: '&#x270A',
    paper: '&#x270B',
    scissors: '&#x270C'
}

function playRound(e) {  
    const playerSelection = e.target.id;  
    const computerSelection = computerPlay();
    
    if (playerSelection === computerSelection) {
        result.textContent = "Tie! Better luck next time.";
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            result.textContent = "Paper beats Rock.";
            cScore += 1;
        } else {
            result.textContent = "Rock beats Scissors.";
            pScore += 1;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result.textContent = "Paper beats Rock.";
            pScore += 1;
        } else {
            result.textContent = "Scissors beats Paper.";
            cScore += 1;
        }
    } else if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            result.textContent = "Rock beats Scissors.";
            cScore += 1;
        } else {
            result.textContent = "Scissors beats Paper.";
            pScore += 1;
        }
    }
    
    if(outcome.firstElementChild) {
        pBoard.remove;
        cBoard.remove;
        result.remove;
    } 

    let boards = document.createElement('div');
    outcome.appendChild(boards);
    boards.className = 'boards';

    boards.appendChild(pBoard);
    pBoard.className = 'board';
    pBoard.appendChild(pBoardLabel);
    pBoardLabel.textContent = 'PLAYER';
    pBoard.appendChild(pScoreText);
    pScoreText.textContent = pScore;
    pScoreText.className = 'score';
    pBoard.appendChild(pSelection);
    pSelection.innerHTML = `<p>Last selection ${Emojis[playerSelection]}</p>`;
    pSelection.className = 'selection';

    boards.appendChild(cBoard);
    cBoard.className = 'board';
    cBoard.appendChild(cBoardLabel);
    cBoardLabel.textContent = 'COMPUTER';
    cBoard.appendChild(cScoreText);
    cScoreText.textContent = cScore;
    cScoreText.className = 'score';
    cBoard.appendChild(cSelection);
    cSelection.innerHTML = `<p>Last selection ${Emojis[computerSelection]}</p>`;
    cSelection.className = 'selection';

    outcome.appendChild(result) 
        

    if (pScore === 5 || cScore === 5) {
        hideBtns()
        sayWinner()
        tryAgain()
    };

    count += 1;
    if (count) document.querySelector('.header p').textContent = 'First one to reach 5 points win.';
}

function sayWinner() {
    outcome.appendChild(winner)
    if (pScore > cScore) {
        winner.textContent = 'YOU WIN!';
    } else {
        winner.textContent = 'YOU LOSE!';
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
    tryAgainBtn.className = 'btn';
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
    count = 0;
    document.querySelector('.header p').textContent = 'Chose one option to start playing!';
    rockBtn.style.display = 'inline';
    paperBtn.style.display = 'inline';
    scissBtn.style.display = 'inline';
}
