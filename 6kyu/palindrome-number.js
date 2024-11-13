/*
Palindrome Number (https://leetcode.com/problems/palindrome-number/)
Given an integer x, return true if x is a palindrome, and false otherwise.
*/

/**
 * @param {number} x 
 * @return {boolean}
 */

// init check: x < 0 ? return false
// create a var converting input to a string
// create pointers to point at diff positions within new string
// if pointers are not pointing to the same number, return false
// if pointers iterate completely thru string and dont return false, input is a palindrome

var isPalindrome = function(x){
    if(x < 0) return false;
    let str = x.toString();
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        };
        left++;
        right--;
    };
    return true;
}

// alternate approach
const isPalindrome = x => x < 0 ? false : (x.toString() === x.toString().split('').reverse().join(''))

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false

// ALL TESTS PASS