let score = JSON.parse(localStorage.getItem('score')) ||  {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScore();


function playGame(playerMove) {

const computerMove = computerMoveFunction();

let result = '';

if (playerMove === 'Sissors') {

if (computerMove === 'Rock') {
result = 'You lose.';
} else if (computerMove === 'Paper') {
result = 'You win.';
} else if (computerMove === 'Sissors') {
result = 'Tie.'
}

} else if (playerMove === 'Paper') {
if (computerMove === 'Rock') {
  result = 'You win.';
} else if (computerMove === 'Paper') {
  result = 'Tie.';
} else if (computerMove === 'Sissors') {
  result = 'You lose.';
}

} else if (playerMove === 'Rock') {
if (computerMove === 'Rock') {
result = 'Tie.';
} else if (computerMove === 'Paper') {
result = 'You lose.';
} else if (computerMove === 'Sissors') {
result = 'You win.';
}
}

if (result === 'You win.') {
score.wins += 1;
} else if (result === 'You lose.') {
score.losses += 1;
} else if (result === 'Tie.') {
score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScore();

document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `You
<img src="img/${playerMove}.png" class="icon-move">
<img src="img/${computerMove}.png" class="icon-move">
Computer`;

}

function updateScore() {
document.querySelector('.js-score')
 .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

function computerMoveFunction () {
const randomNumber = Math.random();

let computerMove = ('');

if (randomNumber >= 0 && randomNumber < 1/3) {
  computerMove = 'Rock';
} else if (randomNumber >= 1/3 && randomNumber < 2/3) {
  computerMove = 'Paper';
} else if (randomNumber >= 2/3 && randomNumber < 1) {
  computerMove = 'Sissors';
}

return computerMove;  
}