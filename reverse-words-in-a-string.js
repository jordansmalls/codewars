// Reverse Words in a String
/*
Given an input string s, reverse the order of the words. A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space. Return a string of the words in reverse order concatenated by a single space.
Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Leetcode Medium
*/

// clean up the input string
// create pointer to iterate over the input string
// create stack to hold characters after clearing leading and trailing whitespace
// if topStack == " " && s[idx] == " " --> do nothing. else, push s[idx] to the stack
// convert stack into a string, then split by " " delimiter, then join back into a string and return.

/**
 * @param {string} s
 * @return {string}
 */

function reverseWords(s) {
    s = s.trim();
    let stack = [];
    let idx = 0;
    while (idx < s.length) {
        let topStack = stack[stack.length - 1];
        if (!(topStack === " " && s[idx] === " ")) {
            stack.push(s[idx]);
        };
        idx++;
    };
    return stack.join("").split(" ").reverse().join(" ");
}


const Input = "the sky is blue"
const Output = "blue is sky the"

const InputTwo = "a good   example"
const OutputTwo = "example good a"


console.log(reverseWords(Input) == Output) // true
console.log(reverseWords(InputTwo) == OutputTwo) // true