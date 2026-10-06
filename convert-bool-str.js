// https://www.codewars.com/kata/551b4501ac0447318f0009cd
// Convert Boolean to a String
/*
Implement a function which converts the given boolean value into its string representation.
Note: Only valid inputs will be given.
*/

// input -> boolean as input
// output -> string, input boolean represented as a string

// use ternary operator to eval which string to return, either true or false based on input
// write func as one line using arrow syntax, since the func is concise and simple.


const booleanToString = b => b ? "true" : "false";

console.log(booleanToString(false)); // "false"
console.log(booleanToString(true)); // "true"
