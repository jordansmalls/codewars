// Factorial
/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).
*/

const factorial = n => {
    if(n < 0 || n > 12){
        throw Error(RangeError)
    }else if(n == 1 || n == 0){
        return 1
    }else{
        return n * factorial(n - 1)
    }
}


// alternate syntax

function factorial(n) {
    if (n < 0 || n > 12)
      throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
  }


// one line solution :)
const factorial = n => n < 0 || n > 12 ? (() => { throw new RangeError(); })() : n < 2 ? 1 : n * factorial(n - 1);