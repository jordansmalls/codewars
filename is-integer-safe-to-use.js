// Is integer safe to use?
/*
Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.
*/

const SafeInteger = n => Number.isSafeInteger(n);

console.log(SafeInteger(9007199254740990) === true)
console.log(SafeInteger(-90) === true)
console.log(SafeInteger(9007199254740992) === false)

// tests pass