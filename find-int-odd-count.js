// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
/*
 Find the Odd Int

Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.

 // input -> array of nums
// output -> the index that appears an odd amount of times

// create a map, iterate over the input arr storing indices as keys and their respective counts as values
// iterate over the new map
  // conditional: if curr value % 2 !== 0 (is odd) return curr key

// extra edge cases && early condiditional/exit checks:

// if the input arr has a length of 1, return input[0]


// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
 */

const findOdd = function(A) {
  if(A.length === 1) return A[0];

const map = new Map();

  for(const index of A) {
    map.set(index, (map.get(index) || 0) + 1);
  }

  for(const [key, value] of map) {
    if(value % 2 !== 0) return key;
  };
};
