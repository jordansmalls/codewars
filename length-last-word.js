// Length of the Last Word
/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/


/*
* @params {string} s
* @return {integer}
*/

// input --> string: string consisting of words and spaces
// return --> integer: number representing the length of the last word in the string


// using the built in trim method, remove extra spaces: s.trim()
// using the split method, split the input string into an array using a delim of " " -> into an array of words
// return the length of the last word in the string AKA arr[arr.length - 1].length

// var lengthOfLastWord = function(s){
//     let temp = s.trim().split(' ');
//     let result = temp[temp.length - 1].length;
//     return result;
// };

// more consise solution
const lengthOfLastWord = s => s.trim().split(' ').pop().length



console.log(lengthOfLastWord("Hello World")) // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4
console.log(lengthOfLastWord("luffy is still joyboy")) // 6

//tests pass