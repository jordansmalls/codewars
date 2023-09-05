// Summation

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.


const summation = n => {
    let solution = 0;
    for(let i = 0; i <= n; i++){
        solution += i
    }
    return solution
};