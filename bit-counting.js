// Bit Counting
/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// input arg -> int
// input int is never negative
// return --> number of bits that are equal to one in the binary representation of that number

// convert arg into binary string --> toString method rad 2
// loop over str, count the number of instances of the num 1
// return count of instances

// var countBits = function(n){
//     let count = 0;
//     let binaryStr = n.toString(2)
//     for(let i = 0; i < binaryStr.length; i++){
//         if(binaryStr[i] === '1')count++
//     };
//     return count;
// };

// more elegant, less effective
const countBits = n => n.toString(2).split('1').length - 1;

const x = 1234;
console.log(countBits(x)) // 5
// tests pass
