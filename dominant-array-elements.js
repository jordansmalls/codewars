// Dominant array elements
/*
An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements.
*/

const solve = arr => {
    let dominantElements = arr.slice(-1);
    let currentMax = dominantElements[0];
  
    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i] > currentMax) {
        dominantElements.unshift(currentMax = arr[i]);
      }
    }
  
    return dominantElements;
  };
  
let test = solve([1,21,4,7,5])
let ans = [21,7,5]
console.log({test, ans})
let test2 = solve([5,4,3,2,1])
let ans2 = [5,4,3,2,1]
console.log({test2, ans2})

// tests pass