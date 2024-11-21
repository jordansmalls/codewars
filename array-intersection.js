/*
Array Intersection

Given two input integer arrays, return an array that contains the values both inputs share in common.

Example:
Input: [1,2,3,4,5]
Input: [0,2,4,6,8]
Output: [2,4]

*/

/**
 * 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @return {number[]}
 */


var arrayIntersection = (arr1,arr2) => {
    let map = new Map();
    let result = [];
    for(const num of arr1) {
        map.set(num, 1);
    }
    for(const num of arr2) {
        if(map.has(num)) {
            result.push(num);
            // delete num in the case arr2 contains multiple of the same intersection value
            map.delete(num)
        }
    }
    return result;
};

console.log(arrayIntersection([1,2,3,4,5],[0,2,4,6,8])) // [2,4]
console.log(arrayIntersection([10,20,30,40,50],[0,10,50,30,80,100])) // [10,30,50]