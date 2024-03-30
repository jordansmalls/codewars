// Array Possibilites
/*
A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).

Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.
*/

const isAllPossibilities = arr => {
  arr = arr.sort((a,b)=>a-b);
  var test = [];
  var len = arr.length - 1;
  for(let i = 0; i < len + 1; i++){
    test.push(i)
  }
  return (JSON.stringify(test) === JSON.stringify(arr))
}

const test = [1,2,0,3]
const testAgain = [0,1,2,2,3]
console.log(isAllPossibilities(test)) // true
console.log(isAllPossibilities(testAgain)) // false 
console.log(isAllPossibilities([0])) // true
/*
[1,2,0,3] => True
# Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)

[0,1,2,2,3] => False
# Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)

[0] => True
# Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).
*/

// tests pass