// Factorial
// Your task is to write function factorial.
// https://en.wikipedia.org/wiki/Factorial

const factorial = n => n === 0 ? 1 : n * factorial(n-1)

// tests pass