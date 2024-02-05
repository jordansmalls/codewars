// Square(n) Sum
/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/

const squareSum = arr => arr.reduce((a,c)=>a+c**2);

const nums = [1,2,2] // 9
console.log(squareSum(nums) === 9) // true
