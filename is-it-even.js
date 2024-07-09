// Is it even?

// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// const testEven = n => {
//     if(n % 2 === 0){
//       return true
//     }else{
//       return false
//     }
//   } 
  
var testEven = n => n % 2 == 0 ? true : false;

// refactored shorthand version

const testEvenAgain = n => !(n%2)


console.log(testEven(2)) // true
console.log(testEven(3)) // false
console.log(testEven(24)) // true