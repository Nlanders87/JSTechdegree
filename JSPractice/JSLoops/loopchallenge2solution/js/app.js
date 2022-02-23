const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let message;


function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

for (i = 1; i <= 10; i++ ) {
  let guess = prompt("Can you guess the random number?");
  if (parseInt(guess) === randomNumber) {
    message = `You got it. The number was ${randomNumber}. It took you ${i} tries to get it right.`
    break;
  }
  message = `You did not guess the correct number. It was ${randomNumber}`;
}

main.innerHTML = `<h1>${message}</h1>`