// Even?
/*
Write a function that checks if any given integer input is an even number. Return a boolean value.
*/

const amIEven = n => n % 2 === 0 ? true : false;


console.log(amIEven(24), true)
console.log(amIEven(8), true)
console.log(amIEven(15), false)

// tests pass