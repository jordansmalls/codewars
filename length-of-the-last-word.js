// Length of the Last Word
/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal substring consisting of non-space characters only.
*/

// @param string
// @return integer

// var lengthOfLastWord = function(s){
//   s = s.trim();
//   var arr = s.split(" ");
//   var lastIndex = arr[arr.length - 1]
//   return lastIndex.length
// }

var lengthOfLastWord = str => str.trim().split(" ").at(-1).length


console.log(lengthOfLastWord("Hello World")) // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4
console.log(lengthOfLastWord("luffy is still joyboy")) // 6