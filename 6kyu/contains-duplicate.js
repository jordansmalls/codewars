/*
Contains Duplicate (Leetcode: https://leetcode.com/problems/contains-duplicate/submissions/1456720536/)

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1], Output: true
Explanation: The element 1 occurs at the indices 0 and 3.

Example 2:
Input: nums = [1,2,3,4], Output: false
Explanation: All elements are distinct.

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */



// input will only be integers
// brute force
// create map, 

var containsDuplicate = nums => {
    let map = new Map();
    for(const idx of nums){
        if(map.has(idx)) return true
        else map.set(idx, 1)
    };
    return false;
};

// implementing a set, if there is at least one dupe, set.size will not equal the length of nums
// more concise && less memory overall (no key,value pairs)

var containsDuplicateSet = nums => new Set(nums).size !== nums.length

console.log(containsDuplicate([1,2,3,1])) // true
console.log(containsDuplicate([1,2,3,4])) // false

console.log(containsDuplicateSet([1,2,3,1])) // true
console.log(containsDuplicateSet([1,2,3,4])) // false

// ALL TESTS PASS