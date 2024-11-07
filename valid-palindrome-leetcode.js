/*
Valid Palindrome
https://leetcode.com/problems/valid-palindrome/description/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

*/

/**
 * @param {string} s
 * @return {boolean}
 */


// Brute force & concise
// create copy, convert string to lowerCase && use replace string method with regex to remove any char that is not a letter or num 0-9
// create a reversed copy var, shorthand with split reverse join array methods
// return the comparison of the copy and reversed string (copy == reversed means the input is a palindrome)

// var isPlaindrome = function(s){
//     let copy = s.toLowerCase().replace(/[^a-z0-9]/g,'');
//     let reversed = copy.split('').reverse().join('');
//     return copy === reversed;
// }


// clean string (lowercase and remove punctuation)
// init 2 pointers: (if s[left] !== s[right] return false) increment left & right vars
// loop completes without returning bool, return true (input is a palindrome)

// improves efficiency by avoiding the need to reverse the string & O(1) space 
var isPalindrome = s => {
    s = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    let l = 0;
    let r = s.length - 1;
    while(l < r){
        if(s[l] !== s[r]){
            return false;
        }
        l++;
        r--;
    };
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")) // true
console.log(isPalindrome("race a car")) // false
console.log(isPalindrome("0P")) // false
console.log(isPalindrome(" ")) // true

// ALL TESTS PASS