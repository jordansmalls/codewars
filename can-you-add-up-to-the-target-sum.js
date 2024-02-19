// Can you add up to the target sum?
/*
Given an array of numbers and a target number, return an array of numbers that sums to the target number.
You can only pick numbers from the given array, but you can pick them as many times as you like.

To not create different solutions you should always pick as big a number as possible.
The array of numbers will be sorted in descending order (bigger numbers come first, smaller numbers later).

If it is impossible to get to the target number, return an empty array (or, depending on language, an empty value).
Input

As arguments you will receive:
numbers: an array of numbers, positive integers from 1 to 1 000, sorted in descending order.
target: a number, a positive integer from 1 to 100 000.
All inputs will be valid.
Output

Your function should return an array of integers from the input array that, when summed, equals the target number.
Return an empty array (Haskell: Nothing) when it is not possible.
Tests

Your function should pass 10 fixed tests and 990 random tests.
Total number of tests is 1000.
*/

// input --> array of numbers and a target num ==> array contains pos ints 1 - 1000 & target num == 1 - 100,000
// return --> array of nums that sums to the target num IF not poissible, return empty array
// can only pick nums from the given array, BUT can pick them as many times as needed
// always aim for as large of a num as possible
// input arr will be sorted in desc order
// loop over array and find combinations that sum to target num
// take the combos and push to a newly created arr to be returned


const getNumbers = (numbers, target, result = [], cache = {}) => {
  if (cache[target]) return cache[target];
  if (!target) return result;
  if (target < 0) return [];

  for (let n of numbers) {
    const check = getNumbers(numbers, target - n, [...result, n], cache);
    cache[target - n] = check;
    if (check.length) return check;
  }

  return [];
};

const x = [100, 25, 15, 7, 3];
const y = 24;
console.log(getNumbers(x,y)) // [15,3,3,3]

// test pass