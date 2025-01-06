// Find the Largest Number in Array
/*
Write a function that takes an array of numbers and returns the largest number in the array.

numbers = [3, 5, 7, 2, 8, 1];
output: 8

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// function largestNum(nums) {
//     let largestNum = nums[0];
//     for(let i = 1; i < nums.length; ++i) {
//         if(nums[i] > largestNum) {
//             largestNum = nums[i];
//         };
//     };
//     return largestNum;
// };

const largestNum = nums => Math.max(...nums)

const numbers = [3, 5, 7, 2, 8, 1];
console.log(largestNum(numbers))
