'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let display = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.message').textContent = 'start guessing man';
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  if (!guess) {
    //document.querySelector('.message').textContent = 'no number man';
    display('no number man');
  } else if (guess == number) {
    //document.querySelector('.message').textContent = 'o yeah';
    display('o yeah');
    document.querySelector('body').style.backgroundColor = '#8A2BE2';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > number ? 'too high man' : 'too low man';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'u lost the game';
      display('u lost the game');
    }
  }
  /* else if (guess > number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'too high man';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'u lost the game';
    }
  } else if (guess < number) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'too low man';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'u lost the game';
    }
  } */
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'start guessing man';
  display('start guessing man');
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
