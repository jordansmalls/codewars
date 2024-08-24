/*
Fizz Buzz
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
*/

/*
* @params {number} num
* @return {array} 
*/

// create an array to store the result
// instantiate a loop to check nums 1 to num
// use mod to determine when to push to array result
// return result array

function fizzBuzz(num: number): string[]{
    let result: string[] = [];
    for(let curr = 1; curr <= num; curr++){
        if(curr % 15 == 0){
            result.push("FizzBuzz")
        }else if(curr % 3 == 0){
            result.push("Fizz")
        }else if(curr % 5 == 0){
            result.push("Buzz")
        }else{
            result.push(curr.toString())
        };
    };
    return result;
};