// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const fixedNumberOne = Number(numberOne)
const fixedNumberTwo = Number(numberTwo)

const solution = fixedNumberOne+fixedNumberTwo

console.log("Float answer: " + solution)

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherFixedNumberOne = Number(anotherNumberOne)
const anotherFixedNumberTwo = Number(anotherNumberTwo)

console.log("Float with two decimals: " + (anotherFixedNumberOne+anotherFixedNumberTwo).toFixed(2));


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const average = ((one + two + three) / 3)

console.log("Float with 5 decimals : " + (average.toFixed(5)));



// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log("Get c by index: " + letters[2]);
//console.log(letters[letters.indexOf("c")]);

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const replaced = fact.replace('j', 'J')
console.log("Replace j with J in Javascript: " + replaced);
// --------------------------------------



