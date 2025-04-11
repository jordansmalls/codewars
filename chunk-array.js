// Chunk Array (Leetcode #2677.)
/*
Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.
*/

class Solution {
    /**
     * @param {Array} array
     * @param {number} size
     * @return {Array}
     */
    chunk(array, size) {
        const result = [];
        for(let i = 0; i < array.length; i += size) {
            const chunk = array.slice(i, i + size);
            result.push(chunk);
        };
        return result;
    };
};



const test = new Solution()
console.log(test.chunk([1, 2, 3, 4, 5], 2))
/*
[ [1,2], [3,4], [5] ]
*/
console.log(test.chunk([1,2,3,4,5], 1))

/*
[ [1], [2], [3], [4], [5] ]
*/

// tests pass