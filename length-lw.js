// Length of the Last Word
/*
Given a string s consisting of words and spaces, return the length of the last word in the string. 
A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World", Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  ", Output: 4
Explanation: The last word is "moon" with length 4.

*/

/*
* @params {string} s
* @return {integer}
*/

const lengthOfLastWord = s => s.trim().split(' ').pop().length

console.log(lengthOfLastWord("Hello World")) // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4