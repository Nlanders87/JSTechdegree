// 1. Create a multidimensional array to hold quiz questions and answers

const quiz = [
  ['What is 2+5?', '7'],
  ['What color is grass?', 'green'],
  ['Is the ocean blue?', 'yes']
];

const correct = [];
const incorrect = [];
// 2. Store the number of questions answered correctly
let correctAnswer = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for ( let i = 0; i < quiz.length; i++) {
    let question = quiz[i][0];
    let answer = quiz[i][1];
    let response = prompt(question);
   
    if (response.toUpperCase() === answer.toUpperCase()) {
      correctAnswer++;
      correct.push(question);
   } else {
     incorrect.push(question);
   }
};

function listAnswers (arr) {
  let items = '';
  for ( let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li> `
  }
  return items;
}

// 4. Display the number of correct answers to the user
let message = `
<h1>You got ${correctAnswer} question(s) correct</h1>
<h2>You got these questions correct: </h2>
<ol>${listAnswers(correct)}</ol>

<h2>You got these questions incorrect: </h2>
<ol>${listAnswers(incorrect)}</ol>

`;


document.querySelector('main').innerHTML = message;