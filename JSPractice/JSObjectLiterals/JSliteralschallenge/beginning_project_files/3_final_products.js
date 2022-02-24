/* INSTRUCTIONS
To run this file, click in the Console below and type: node 3_final_products.js 
If the console isn't visible, click the View menu above and choose Show Console.

You can clear the console by typing `clear` and pressing enter.

If your program is stuck in an infinite loop, you can break out of the program by typing ctrl + C.
*/

// 1. Create an array named products.
// 2. Add objects to the array. Each object should be a single product, with the following 4 properties. 
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price


// 3. Create a function named listProducts(). The function should accept 1 parameter -- the array of products. It should return an array of just the names of the products.


// 4. Call the listProducts() function and log the returned value to the console.


// 5. Create a function names totalValue(). The function should accept 1 parameter -- the array of products. It should return the total value of all of the products in the array. You calculate the value of one product by multiplying the inventory value by the unit_price value


// 6. Call the totalValue() function and log the returned value to the console.


// 7. Run your code by typing node 3_final_products.js in the console below
let products = [
    {
        name: 'Table',
        inventory: 10,
        unit_price: 39.99
    },
    {
        name: 'Chair',
        inventory: 20,
        unit_price: 19.99
    },
    {
        name: 'Lamp',
        inventory: 5,
        unit_price: 9.99
    }
];

function listProducts(prods) {
    let product_names = [];
    for (let i = 0; i < prods.length; i++) {
        product_names.push(prods[i].name);
    }
    return product_names;
}

console.log(listProducts(products));

function totalValue(prods) {
    let product_value = 0;
    for (i = 0; i < prods.length; i++) {
        product_value += prods[i].inventory * prods[i].unit_price;
    }
    return product_value;
}

console.log(totalValue(products));