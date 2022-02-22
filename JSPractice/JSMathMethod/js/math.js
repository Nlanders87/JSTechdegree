alert(`Let's do some math`);

const num1 = parseFloat(prompt(`Please enter a number`) );
const num2 = parseFloat(prompt(`Please enter a second number`) );

if (num1 === 0 || num2 === 0) {
    alert(`You can't divide by 0. Please enter a different number`)
} else if ( isNaN(num1) || isNaN(num2) ){
    alert(`You entered a word. Please enter a letter`)
} else {
    const numAdd = num1 + num2;
    const numMult = num1 * num2;
    const numDiv = num1/ num2;
    const numSub = num1 - num2;

    const message = `<h1>Math with the numbers ${num1} and ${num2}</h1>
    <p>${num1} + ${num2} = ${numAdd}</p>
    <p>${num1} * ${num2} = ${numMult}</p>
    <p>${num1} / ${num2} = ${numDiv}</p>
    <p>${num1} - ${num2} = ${numSub}</p>`

    document.write(message);

}









