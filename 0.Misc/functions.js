// create a function called my first function that returns a greeting of sorts

function greeting()
{
    return "Hello there, General Kenobi.";
}

console.log(greeting());

const variablefFunction = function () 
{
    console.log("Hello there from the anonymous function");
};

variablefFunction();

// arrow functions declare the "this" keyword differently, binds it to the scope of the function
const myArrowFunction = () => {
    console.log("Hello there from the anonymous function that's also an arrow function.");
}

myArrowFunction();



// callbacks

// call sayHiLater so that it says "Hi"
function sayHiLater(anyFunctionReference)
{
    // simulate some code running 
    // takes some time ...
    // and more time ...
    anyFunctionReference();
}

function sayHi()
{
    console.log("hi");
}

sayHiLater(sayHi);


// hoisting


//call sayHiLater so that it says "hello" or a new greeting that you like

const sayHi2 = () => 
{
    console.log("Hi2")
}

sayHiLater(sayHi2);

function interact(genericInteraction, name)
{
    console.log(genericInteraction(name));
}

// call interact
// interact should call a pole function and the poke function should say
// something like poke + name

function poke(text)
{
    return "Poke " + text;
}

const poke2 = name => {
    return "Poke " + name;
};

interact(poke, "Anders");

// hug someone by calling interract and do it all in one line
// Example: " hug "+ name where name is Napster for instance

interact( (name) => "Hug " + name, "Anders");