// Average Scores
/*
Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops). The array will never be empty.
*/

/*
function average(score) {
    let sum = score.reduce((acc,c)=>acc+c,0);
    let numOfScores = score.length;
    let average = Math.round(sum / numOfScores);
    return average;
} */

// more concise function
const average = score => Math.round(score.reduce((acc,c)=>acc+c,0)/score.length);

let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(average(arr), 6);
let arr2 = [80, 90, 75, 95]
console.log(average(arr2), 85)

// test cases pass