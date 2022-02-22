// 1. Declare variables and capture input.
const adj = prompt("Please type an adjective");
const verb = prompt('Please type a verb');
const noun = prompt("Please type a noun");


// 2. Combine the input with other words to create a story.
const story = `<p>The ${noun} was so scared of the ${adj} bird that he ${verb} cookies.</p>`;

// 3. Display the story as a <p> inside the <main> element.

document.querySelector('main').innerHTML = story;