// Palindrome Number
// Given an integer x, return true if x is a palindrome, and false otherwise.

/**
 * @param {number} x
 * @returns {boolean}
 */

// var isPalindrome = function(x) {
//     if(x < 0) return false;
//     let str = x.toString();
//     let left = 0;
//     let right = str.length - 1;
//     while(left < right) {
//         if(str[left] !== str[right]) {
//             return false;
//         };
//         left++;
//         right--;
//     };
//     return true;
// };

// one line solution (uses more space and runs more poorly)
var isPalindrome = x => x < 0 ? false : x.toString() === x.toString().split("").reverse().join("");

const test = -121
const testTwo = 121
const testThree = 24
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(121)) // true
console.log(isPalindrome(24)) // false