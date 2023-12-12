// Factorial Calculator
/*
You're tasked with creating a program that computes the factorial of a given non-negative integer. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 * 4 * 3 * 2 * 1 = 120.
Write a function calculate_factorial(n) that takes in a non-negative integer n as input and returns its factorial.

Your solution should:
Handle edge cases: Ensure the function handles scenarios where n is 0 or 1 and returns 1.
Validate the input: Ensure the function accepts only non-negative integers and handles invalid inputs gracefully, returning an appropriate message or error.
Optimize for efficiency: Implement an efficient algorithm to calculate factorials. Consider using an iterative approach or any suitable technique to avoid unnecessary recursive calls and improve performance.
Example:
Input: calculate_factorial(5)
Output: 120
*/

function calculateFactorial(n){
    if(n < 0){
        throw new Error('n must not be negative.')
    };
    if(n == 0 || n == 1){
        return 1
    }else{
        return n * calculateFactorial(n - 1)
    }
}

console.log(calculateFactorial(5), 120)
console.log(calculateFactorial(13), 6227020800)
// tests pass

// alt solution using iteration instead of recursion

function calculateFactorial(n) {
    if (n < 0) {
        throw new Error('Input must be a non-negative integer.');
    }
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(calculateFactorial(5), 120)
console.log(calculateFactorial(13), 6227020800)