// Apply Transform Over Each Element in Array
/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element. The returned array should be created such that returnedArray[i] = fn(arr[i], i).Please solve it without the built-in Array.map method.
*/


// input: nums array & a function
// output: an array -->  resultArray[i] = fn(arr[i], i)

// solve without the map method!
// create a new array to store the results of the function
// iterate over the input arr, and perform the func with the curr index
    // push the result into the new result array
// return the result array (elements should be transformed)


/*
Example 1:
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one.
*/


// [1,2,3]  (n) = n => n + 1
// []
// 1 + 1 == 2
// [2,]
// 2 + 1 == 3
// [2,3]
// 3 + 1 == 4
// [2,3,4]
// return [2,3,4]


/**
 *
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const map = function(arr, fn) {
    const result = [];
    for(let idx = 0; idx < arr.length; ++idx) {
        let temp = fn(arr[idx], idx);
        result.push(temp);
    };
    return result;
}


const fn = function plusone(n) { return n + 1; }

console.log(map([1,2,3], fn)) // [2,3,4]