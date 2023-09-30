// Sum Mixed Array

/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

const sumMix = x => {
    let res = [];
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === 'string') {
        res.push(Number(x[i]));
      } else if (typeof x[i] === 'number') {
        res.push(x[i]);
      }
    }
    return res.reduce((acc, c) => acc + c, 0);
  }
  