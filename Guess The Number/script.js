'use strict';

let secretNr = Math.trunc(Math.random() * 30) + 1;
let score = 30;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No Number inserted!');
  } else if (guess === secretNr) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNr;

    document.querySelector('body').style.backgroundColor = '#06b347';

    document.querySelector('.number').style.width = '20rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNr) {
    if (score > 1) {
      displayMessage(guess > secretNr ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the Game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ff000';
    }
  }
});

document.querySelector('.try').addEventListener('click', function () {
  score = 30;
  secretNr = Math.trunc(Math.random() * 30) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#3e2c49';

  document.querySelector('.number').style.width = '15rem';
});
