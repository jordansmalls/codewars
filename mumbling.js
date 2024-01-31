// Mumbling
/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// function accum(s){
//     s = s.toLowerCase();
//     let len = s.length;
//     let arr = [];
//     for(let i = 0; i < len; i++){
//         let firstChar = s[i].toUpperCase();
//         let temp = s[i].repeat(i);
//         arr.push(firstChar + temp);
//     };
//     return arr.join('-');
// };

// simplified solution
const accum = s => s.toLowerCase().split('').map((char, index) => char.toUpperCase() + char.repeat(index)).join('-');

const test = "abcd";
const ans = "A-Bb-Ccc-Dddd";
console.log(accum(test) === ans) // true
// test passes
