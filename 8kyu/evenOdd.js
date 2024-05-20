// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//@param integer
//@return string

var evenOrOdd=n=> n%2==0?"Even":"Odd"

console.log(evenOrOdd(24)) // even
console.log(evenOrOdd(23)) // odd
console.log(evenOrOdd(11)) // odd
console.log(evenOrOdd(8)) // even

// tests pass