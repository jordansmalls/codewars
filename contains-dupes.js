// Contains Duplicates
/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// create a set and add the nums from the input arr to the set
// return the comparison of the set's size NOT being equal to the length of the set -- set's only store unique vals

// const containsDuplicates = function(nums) {
//     const set = new Set();
//     for(const idx of nums) {
//         if(set.has(idx)) {
//             return true;
//         } else {
//             set.add(idx);
//         };
//     };
//     return false;
// }

const containsDuplicates = nums => (new Set(nums).size) != nums.length;


console.log(containsDuplicates([1,2,3,1])) // true
console.log(containsDuplicates([1,1,1,3,3,4,3,2,4,2])) // true
console.log(containsDuplicates([1,2,3,4])) // false

