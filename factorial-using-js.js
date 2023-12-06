// Factorial using JS
/*
Your task is to write function factorial.
https://en.wikipedia.org/wiki/Factorial
*/

const factorial = n => n ? factorial(n - 1) * n : 1;

console.log(factorial(4), 24)
console.log(factorial(15), 1307674368000)
console.log(factorial(11), 39916800)

// tests pass