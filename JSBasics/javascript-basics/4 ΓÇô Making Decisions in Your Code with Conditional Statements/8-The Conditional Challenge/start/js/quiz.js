/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/

const q1 = prompt("What color is grass?");
const q2 = prompt("Do dogs have four legs?");
const q3 = prompt("How do you spell ocean?");
const q4 = prompt("What is 2 + 5?");
const q5 = prompt("What is 2 * 5?");
let score = 0;
let rank;


// 2. Store the rank of a player
if (q1.toUpperCase() === 'GREEN'){
  score += 1;
} 

if (q2.toUpperCase() === 'YES'){
  score +=1;
}

if (q3.toUpperCase() === 'OCEAN'){
  score +=1;
}

if (q4 === "7" ){
  score +=1;
}

if (q5 === "10" ){
  score +=1;
}

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/


/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if (score === 5) {
  rank = "Gold";
} else if (score >= 3){
  rank = "Silver"
} else if (score >= 1 ) {
  rank = "Bronze"
} else {
  rank = "BOOOOO"
}


// 6. Output results to the <main> element

main.innerHTML = `<h2>You got ${score} out of 5.</h2>
                  <p>You get a ${rank} Crown`;