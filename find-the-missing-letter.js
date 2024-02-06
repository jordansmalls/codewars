// Find the missing Letter
/*
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)
*/


// input arr of chars -> always valid, always exactly one letter missing, chars of only one case, and arr len >= 2
// return str of char missing
// loop through arr
// charCodeAt to determine which num breaks the sequence
// return str of char that completes sequence

// function findMissingLetter(array){
//     let missingChar = '';
//     let temp;
//     for(let i = 1; i < array.length; i++){
//         let curr = array[i].charCodeAt(0);
//         let prev = array[i - 1].charCodeAt(0);
//         if(curr !== prev + 1){
//             temp = prev + 1
//             break
//         }
//     };
//     missingChar = String.fromCharCode(temp);
//     return missingChar;
// }


//cleaned
const findMissingLetter = arr => {
    let temp;
    for(let i = 1; i < arr.length; i++){
        let curr = arr[i].charCodeAt(0);
        let prev = arr[i - 1].charCodeAt(0);
        if(curr !== prev + 1){
            temp = prev + 1;
            break;
        };
    };
    return String.fromCharCode(temp);
};


const x = ['a','b','c','d','f'];
const y = ['O','Q','R','S'];
console.log(findMissingLetter(x)) // 'e'
console.log(findMissingLetter(y)) // 'P'

// tests pass
