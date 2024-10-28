'use strict';

// /* Fetch a text from the HTML classes and display in the console. */
// console.log(document.querySelector('.message').textContent);

// /* Set a HTML element to something else. */
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// /* Set the value of a HTML input. This is like a placeholder. */
// document.querySelector('.guess').value = 23;

// /* Get the value of a HTML input. */
// console.log(document.querySelector('.guess').value);

// /* Event listener - mouse click, key press, mouse moving. */

/* Define a function that creates a secret number. */
function defineSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

/* Define the function that manipulate the DOM. */
function manipulateTextContent(item, customMessage) {
  return (document.querySelector(`${item}`).textContent = customMessage);
}

/* Assign the secret number. */
let secretNumber = defineSecretNumber();

/* Define the score. */
let score = 20;
let highscore = 0;
manipulateTextContent('.score', score);

// Re-try mechanism, the "Again!" button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = defineSecretNumber();
  manipulateTextContent('.message', 'Start guessing...');
  manipulateTextContent('.score', score);
  manipulateTextContent('.number', '?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Prototype -> Method call, type of event, what to do -> E.g: addEventListener('click')
// This is for the "Check!" button for the guessing game.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input.
  if (!guess) {
    manipulateTextContent(
      '.message',
      'No Number entered. Please try again. ⛔'
    );

    // When player wins.
  } else if (guess === secretNumber) {
    manipulateTextContent('.message', '🎉 Correct Number!');
    manipulateTextContent('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      manipulateTextContent('.highscore', secretNumber);
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      score--;
      manipulateTextContent('.score', score);
    } else {
      manipulateTextContent('.message', '💥 You lost the game!');
      manipulateTextContent('.score', 0);
    }
  }
});
