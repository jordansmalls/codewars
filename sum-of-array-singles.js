// Sum of array singles
// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

const repeats = array => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      let count = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
          count++;
        }
      }
      if (count === 1) {
        sum += array[i];
      }
    }
    return sum;
  }

  
repeats([4,5,7,5,4,8]) --> 15
repeats([9, 10, 19, 13, 19, 13]) --> 19

// both pass