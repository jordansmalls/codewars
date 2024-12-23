// Single Number
/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

/**
 * @param {number[]} nums
 * @returns {number}
 */

// brute force
// create a map: storing nums from input arr as keys, and keeping a count value
// iterate over the map and return whichever key has a value less than 2 (each element appears twice except for one)
var singleNumber = function(nums) {
    let hashmap = new Map();
    for(const num of nums) {
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    };
    for(const [key, value] of hashmap) {
        if(value < 2) {
            return key;
        };
    };
};

let nums = [2,2,1]
console.log(singleNumber(nums)) // 1

let numsTwo = [4,1,2,1,2]
console.log(singleNumber(numsTwo)) // 4

// tests pass