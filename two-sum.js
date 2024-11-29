/*
Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */

var twoSum = function(nums, target) {
    let hashmap = new Map();
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(hashmap.has(complement)) {
            return [hashmap.get(complement), i];
        }else{
            hashmap.set(nums[i], i);
        };
    };
    return null;
}
