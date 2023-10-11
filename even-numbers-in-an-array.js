// Even Numbers in an Array

/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
*/

const evenNumbers = (array, number) => {
    let res = [];
    for(let i = 0; i <= array.length; i++){
        if(array[i] % 2 == 0){
            res.push(array[i])
        };
        if(res.length > number){
            res.shift()
        }
    }
    return res
}

// tests pass

// alt solution

const evenNumbersTwo = (array, number) => array.filter(item => item % 2 === 0).slice(-number);