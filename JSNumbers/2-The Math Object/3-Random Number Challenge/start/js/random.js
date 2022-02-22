/*// Collect input from a user
const numAnswer = prompt('Guess a number');

// Convert the input to a number
const answer = parseInt(numAnswer);



if (answer) {
     // Use Math.random() and the user's number to generate a random number
    const randNum = Math.floor(Math.random() * answer) + 1;

    // Create a message displaying the random number
    alert(`${randNum} is a random number between 1 and ${numAnswer}`);
    } else {
        alert('You need to provide a number');
    } */


const lowNum = prompt("Guess a low number");
const highNum = prompt('Guess a high number');

const lowGuess = parseInt(lowNum);
const highGuess = parseInt(highNum);



if (lowGuess && highGuess) {
    const randoNum = Math.floor(Math.random() * (highGuess- lowGuess + 1) + lowGuess);

    alert(`${randoNum} is a random number between ${lowGuess} and ${highGuess}`);
} else {
    alert('You need to input a number');
}


