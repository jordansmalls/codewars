/*
Digital Root

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

// @params {number} n
// @return {number}

// input -> number: non negative integer
// return -> number: sum of the digits until the sum has less than 2 digits

// inital check: if n less than 10 -> return n
// instantiate variable to hold the number as a string, and split into an array
// ["9", "4", "2"] --> loop over array, and convert strings into nums, reduce array into sum
// continue doing that until the sum is less than two digits
// return the final sum

// var digitalRoot = function (n) {
//   if (n < 10) return n;
//   var arr = n
//     .toString()
//     .split("")
//     .map((num) => +num);
//   let sum = arr.reduce((acc, c) => acc + c, 0);
//   while (sum > 9) {
//     let temp = sum
//       .toString()
//       .split("")
//       .map((num) => +num);
//     sum = temp.reduce((acc, c) => acc + c, 0);
//   }
//   return sum;
// };


// recursive
function digitalRoot(n) {
    if (n < 10) return n; 
    return digitalRoot(
      n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
  }

console.log(digitalRoot(16)); // 1 + 6 = 7 --> 7
console.log(digitalRoot(942)); // 9 + 4 + 2 = 15 = 1 + 5 = 6
console.log(digitalRoot(132189)); // 6
