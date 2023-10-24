// Powers of 2
/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
*/

const powersOfTwo = n => {
    let res = [];
    for(let i = 0; i <= n; i++){
        res.push(Math.pow(2,i))
    }
    return res
}

// test cases pass

// alt solution

function powersOfTwo(n) {
    return Array.from({length: n + 1}, (v, k) => 2 ** k);
  }