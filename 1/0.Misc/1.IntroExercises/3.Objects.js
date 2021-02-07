// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};

const value = myObj.message;

// Log the message 

console.log(value);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const newObj = 
{
    "name": "Alex Maccagnan",
    "age": "28"
};

console.log(newObj);

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

/*
    const stackOverflow = 
    {
        "isAllowed": true
    };
*/

stackOverflow.isAllowed = true;

console.log(stackOverflow);

// make a rule called isAllowed and let the value be true

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property
// called "about" that should say "Just a tribute." 

delete thisSong.description;

thisSong.about = "Just a tribute. -TenaciousD";

console.log(thisSong);

// --------------------------------------


