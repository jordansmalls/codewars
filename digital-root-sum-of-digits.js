// Sum of Digits / Digital Root

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Example
//     16  -->  1 + 6 = 7

const digitalRoot = n => {
    //convert int to str
      let numStr = n.toString();
    //convert str to arr
      let b = Array.from(numStr, Number);
    //progress test
      console.log(b)
    //case of single digit param
      if(b.length === 1){
        return b[0]
      };
    //obtain sum of int arr
    let sum = 0;
    for (let digit of numStr) {
      sum += parseInt(digit);
    }
    // Recursively call the function with the sum
    return digitalRoot(sum);
  }
  