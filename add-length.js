// Add Length
/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
*/


// const addLength = str => {
//     let res = [];
//     let arr = str.split(' ')
//     for(let i = 0; i < arr.length; i++){
//         res.push(`${arr[i]} ${arr[i].length}`)
//     }
//     return res
// }

// refactored

const addLength = str => str.split(' ').map(word => `${word} ${word.length}`);

console.log(addLength('apple ban'), ['apple 5', 'ban 3'])
console.log(addLength('you will win'),['you 3', 'will 4', 'win 3'])
// tests pass