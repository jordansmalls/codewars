// Sum Array Singles
/*
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice. 
*/

// const repeats = arr => {
//   var sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// O(n)
const repeats = arr => arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((a,c)=>a+c)

const x = [4,5,7,5,4,8];
console.log(repeats(x)) // 7 + 8 --> 15
// test pass
