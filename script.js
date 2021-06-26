'use strict';
let score = 20;

document.querySelector('.score').textContent = score;

let highscore = 0;

let flag = '??';

let SecretNumber = Math.trunc(Math.random() * 100);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);
  if (!guess) {
    // when no number is entered.
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === SecretNumber) {
    // for winning situation
    flag = '?';
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guess > SecretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Too high!';
  } else if (guess < SecretNumber) {
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Too low!';
  }
  if (score == 0) {
    document.querySelector('.message').textContent = 'You loose Nigga!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  if (flag == '?' && highscore < score) {
    document.querySelector('.highscore').textContent = score;
  }
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 100);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
