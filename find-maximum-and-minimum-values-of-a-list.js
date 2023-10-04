// Find Maximum and Minimum Values of a List

/*
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
*/

const min = x => x.sort((a,b)=>a-b)[0]

const max = x => x.sort((a,b)=>a-b)[x.length-1]

// test cases pass

// alt solution

const minTwo = (list) => Math.min(...list);
const maxTwo = (list) => Math.max(...list);