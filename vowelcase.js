// vOwElcAsE
// Given a string, return a new string where all vowels are converted to uppercase and all other alphabetical characters are converted to lowercase.


// const vowelCase = string => {
//     string = string.toLowerCase();
//     const vowels = "aeiou";
//     const arr = [];
//     for(let i = 0; i < string.length; ++i) {
//         let curr = string[i];
//         if(!vowels.includes(curr)) {
//             arr.push(curr)
//         } else {
//             arr.push(curr.toUpperCase());
//         };
//     };
//     return arr.join("");
// };

// simple and quick regex
const vowelCase = string => string.toLowerCase().replace(/[aeiou]/g, v => v.toUpperCase());



console.log(vowelCase("vowelcase")) // "vOwElcAsE"