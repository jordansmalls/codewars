// Find the Smallest Integer in an Array
/*
Given an array of integers your solution should find the smallest integer.

For example:
    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

// var findSmallestInt = function(array){
//   return array.sort((a,b)=>a-b)[0]
// }

const findSmallestInt = arr => Math.min(...arr)


console.log(findSmallestInt([34, 15, 88, 2])) // 2
console.log(findSmallestInt([34, -345, -1, 100])) // -345

// tests pass