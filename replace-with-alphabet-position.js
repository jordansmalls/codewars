// Replace withn Alphabet Position
/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

*/


/*
* @params {string} text
* @return {string}
*/

// input --> string: containing both letters and punctuation marks (ignore punctuation)
// return --> string: containing the corresponding number for each letters position in the alphabet

// instantiate an array
// handle casing issues -> convert string to all lowercase/uppercase
// remove/replace punctuation from input string
// create a for loop to iterate over the input string
    // - push to array the charCodeAt for the current character in string - 96 (character code for "a" == 97 so -96 == 1, which we want)
// join the array with a delim of space (" ")
// return the array

/*
var alphabetPosition = function(text){
    // instantiate an array
    var array = [];
    // convert string to all lowercase/uppercase & remove punctuation
    text = text.toLowerCase().replace(/[^a-z]/g, '');
    // create a for loop to iterate over the input string
    for(let curr = 0; curr < text.length; curr++){
        // push to array the charCodeAt for the current character in string - 96
        array.push(text.charCodeAt(curr) - 96);
    };
    // join the array with a delim of space (" ") && return the array
    return array.join(" ");
};
*/

// no pseudocode
// const alphabetPosition = text => {
//     text = text.toLowerCase().replace(/[^a-z]/g,'');
//     let arr = [];
//     for(let i = 0; i < text.length; i++){
//         arr.push(text.charCodeAt(i) - 96);
//     };
//     return arr.join(" ");
// };

// one line solution :)
const alphabetPosition = text => text.toLowerCase().replace(/[^a-z]/g, '').split('').map(char => char.charCodeAt(0) - 96).join(' ');
// time complexity: O(n)


console.log(alphabetPosition("The sunset sets at twelve o' clock.") === "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11") // true