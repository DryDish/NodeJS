'use strict';

// dont ever do this .. not allowed in strict mode
//totalGlobalVariable = 123;

var myPreciousRing = "0";
// delete myPreciousRing;
// stridct mode helps us avoid coding in a bad way

 let variableA = "peter";
 let variableB = "Tomas";

 // console.log(variableA + variableB); //don't ever do this
 console.log(variableA, variableB);     //use this for multiple variables

// type coercion
// avoid by always using === and !==

{
    // this is a new scope
    let scopedVariable = "abc";
    {
        let scopedVariable = 123;
        console.log(scopedVariable);
    }
    console.log(scopedVariable);
}

function 