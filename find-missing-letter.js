// Find the Missing Letter
/*
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)
*/

// input --> arr of increasing letters
// return --> missing letter of arr as a string
// arr will alwyas be valid and will always only be missing one letter
// the len of the array is always >= 2
// arr contains letters in only one case
// loop over input arr 
// determine if nums are consec
// if not consec, return the charCode that would complete the sequence as string

// function findMissingLetter(array){
//   let temp = 0;
//   for(let i = 1; i < array.length; i++){
//     if(array[i].charCodeAt() !== array[i - 1].charCodeAt()+1){
//       temp += array[i - 1].charCodeAt()+1
//     }
//   }
//   let result = String.fromCharCode(temp);
//   return result;
// };

const findMissingLetter = array => {
  let temp = 0;
  for(let i = 1; i < array.length; i++){
    if(array[i].charCodeAt() !== array[i - 1].charCodeAt()+1){
      temp += array[i - 1].charCodeAt()+1;
    };
  };
  const result = String.fromCharCode(temp);
  return result;
}

const x = ['a','b','c','d','f'];
const y = ['O','Q','R','S'];
console.log(findMissingLetter(x)) // "e"
console.log(findMissingLetter(y)) // "P" 