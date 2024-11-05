// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// const positiveSum = arr => {
//     if(arr.length === 1){
//         return 0
//     };
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] >= 0){
//             sum += arr[i]
//         }
//     }
//     return sum
// };


// CLEANER

const positiveSum = arr => arr.filter(idx => idx > 0).reduce((acc,c)=>acc+c,0)

console.log(positiveSum([1,-4,7,12]) == 20) // true
console.log(positiveSum([23,7,15,5]) == 50) // true

// ALL TESTS PASS
