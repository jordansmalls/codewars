// No Oddities Here
/*
Write a small function that returns the values of an array that are not odd.
All values in the array will be integers. Return the good values in the order they are given.
*/

// input --> array of only ints
// return --> the ints that are not odd in the same order that they are received

// filter array method to filter even nums only

const noOdds = values => values.filter(num => num % 2 === 0)

const x = [1,2,3,4,5,6,7,8,9,10] // [2,4,6,8,10]
console.log(noOdds(x))
const y = [20,25,30,35,40,45,50] // [20,30,40,50]
console.log(noOdds(y))
const z = [1,3,5,7,9,11] // []