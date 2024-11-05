// Product Array
/*
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

Notes

Array/list size is at least 2 .
Array/list's numbers Will be only Positives
Repetition of numbers in the array/list could occur.
*/

/*
* @params {number[]} nums
* @return {number[]}
*/

// const productArray = nums => {
//     const n = nums.length;
//     const result = new Array(n).fill(1);

//     // Calculate left products
//     let leftProduct = 1;
//     for (let i = 0; i < n; i++) {
//         result[i] = leftProduct;
//         leftProduct *= nums[i];
//     }

//     // Calculate right products and multiply with left products
//     let rightProduct = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         result[i] *= rightProduct;
//         rightProduct *= nums[i];
//     }

//     return result;
// }


var productArray = numbers => numbers.map(x => numbers.reduce((a,b) => a * b) / x)
  
console.log(productArray([1, 2, 3, 4])); // Output: [24, 12, 8, 6]

// ALL TESTS PASS