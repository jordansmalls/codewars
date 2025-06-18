// Contains Duplicate
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Examples:

// Input: nums = [1, 2, 3, 3]
// Output: true

// Input: nums = [1, 2, 3, 4]
// Output: false


// Create a set and iterate over the input array adding nums to the set
// find the result of the comparison of the set's size and the arrays length
    // if the lengths are the same --> return false (there is no duplicate)
    // if the lengths are not the same --> return true (there is a duplicate)


// class Solution {
//     /**
//       * @param {number[]} nums
//       * @returns {boolean}
//     */
//    hasDuplicate(nums) {
//         let set = new Set();
//         for(const num of nums) {
//             set.add(num);
//         };
//         return set.size == nums.length == false ? true : false;
//    };
// };




// const containsDuplicate = nums => {
//     const map = new Map();
//     for(const idx of nums) {
//         if(map.has(idx)) {
//             return true;
//         } else {
//             map.set(idx, true);
//         };
//     };
//     return false;
// };


// adjusted to align with leetcode -- shorthand solution slightly more efficient in js?
const hasDuplicate = nums => new Set(nums).size === nums.length ? false : true;