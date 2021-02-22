// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 

console.log("Showing letter b from the array : " + letters[1]);
//console.log(letters[letters.indexOf("b")]);

// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  
/*
let friend = {
    name : "",
    isaLiar : false
};
*/
let friend1 = {name:"peter", liar: false};
let friend2 = {name: "Sandy", liar: false};
let friend3 = {name: "Mandy", liar :true};

friends.push(friend1);
friends.push(friend2);
friends.push(friend3);

console.log("Printing the array of friends\n");
console.dir(friends);

// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed.
// There is a method for this (finding index based of value). 

console.log("\nIndex of 1729 is: " + significantMathNumbers.indexOf(1729));

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger,
// soda and pizza between the elements cucumber and rocket
console.log("\nOriginal diet = " + diet + "\n");
diet.splice(2,0, "hamburger", "soda", "pizza");

console.log("'Fixed' diet = " + diet);

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that
// it's the last in the array because you are too full already. 

diet.pop();

console.log("\nDiet with removed last element = " + diet);



// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. 
// Copy it to a new array called dinnerTray so you can give it to a friend.  

const dinnerTray = [...diet];


// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

let lettersForEveryTwo = "";

for (let i = 0; i < lettersExpanded.length; i++)
{
    if (i%2!=0)
    {
        lettersForEveryTwo += lettersExpanded[i];
    }
}

console.log("\nLetters = " + lettersForEveryTwo);

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

let goodNumbers = [];
let badNumbers = [];

for (let i = 0; i < numbers.length; i++)
{
    if (numbers[i] > 6 || numbers[i] < 0)
    {
        console.log(numbers[i]);
        goodNumbers.push(numbers[i]);
    } else
    {
        discardedNumbers.push(numbers[i]);
        badNumbers.push(numbers[i]);
    }
}

console.log("\nBigger than 6 or smaller than 0 = "+ goodNumbers);
console.log("\nBad boy numbers : "+ badNumbers);

// --------------------------------------


