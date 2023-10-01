// Primorial of a Number

/*

Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.

Task
Given a number N , calculate its primorial.
*/


function numPrimorial(n){
    var result = 1;
    
    nextPrime:
    for (let i = 2,count = 0; count < n; i++) {
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
      count++;
      result = result * i;
    }
    
    return result
  }