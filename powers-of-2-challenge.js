// Powers of 2
/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
*/

const powersOfTwo = (n) => {
  var arr = [];
  for(let i = 0; i <= n; i++){
    arr.push(Math.pow(2,i));
  };
  return arr
}

// alt solution

const powersOfTwoAgain = n => {
  return [...Array(n + 1)].map((_, i) => 2 ** i)
}



console.log(powersOfTwo(0)) // [1]
console.log(powersOfTwo(2)) // [1,2,4]
console.log(powersOfTwoAgain(2)) // [1,2,4]

// tests pass
