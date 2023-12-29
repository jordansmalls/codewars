// FizzBuzz
/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:
Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

Constraints:
1 <= n <= 104
*/

const fizzbuzz = n => {
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(i % 15 === 0){
            arr.push("FizzBuzz");
        }else if(i % 3 === 0){
            arr.push("Fizz");
        }else if(i % 5 === 0){
            arr.push("Buzz");
        }else{
            arr.push(i.toString());
        }
    };
    return arr;
}

// console.log(fizzbuzz(15),'12Fizz4BuzzFizz78FizzBuzz11Fizz1314Fizzbuzz')
// test passes

// alternate solution --> faster @ runtime
var fizzBuzz = function(n) {
    return Array.from({length: n}, (_, i) => {
        i += 1;
        return i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz'
            : i % 3 === 0 ? 'Fizz' 
            : i % 5 === 0 ? 'Buzz'
            : `${i}`;
    });
};

console.log(fizzbuzz(11))


class FizzBuzz {
    static generateSequence(n) {
      const result = [];
  
      for (let i = 1; i <= n; i++) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        result.push(output || i.toString());
      }
  
      return result;
    }
  }
  
  function fizzBuzz(n) {
    return FizzBuzz.generateSequence(n);
  }
  
  // Usage example:
  const n = 15;
  const fizzBuzzSequence = fizzBuzz(n);
  console.log(fizzBuzzSequence);
  