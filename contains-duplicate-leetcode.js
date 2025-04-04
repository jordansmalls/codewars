// Contains Duplicate
/*
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
*/

class Solution {
/**
 * @description Iterates over an array, nums, and returns a boolean value determined by if any value appears more than once.
 * @param {number[]} nums
 * @returns {boolean}
 */
    hasDuplicate(nums) {
        let set = new Set();
        for(const num of nums) {
            set.add(num);
        };

        if(nums.length !== set.size) {
            return true;
        } else {
            return false;
        };
    };
};

// pass