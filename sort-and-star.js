// Sort and Star
/**

You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/

// input -> list of strings
// output -> the first value in the list AFTER being sorted alphabetically and based on the ascii value of the characters)
// returned value must be a str and have "***" between each of its letters


// const twoSort = function(s) {
//     let sorted = s.sort();
//     let res = [];
//     for(const c of sorted[0]) {
//         res.push(c)
//     }
//     return res.join("***")
// }


// one line solution

const twoSort = (s) => s.sort()[0].split('').join('***');