// Valid Palindrome
/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/**
 * @params {string} s
 * @return {boolean}
 */


// clean string --> remove all non alphanumeric chars && convert to all uppercase or lowercase chars
// create left and right pointers, increment one from zero and the other gets decremented from the input strings length - 1 (last char)
// while loop (left < right), if the pointers are not pointing at the same letter or number, return false (not a palindrome)
// if loop completes without returning false, return true (input string is a palindrome)

var isPalindrome = function(s){
    s = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    let left = 0;
    let right = s.length - 1;
    while(left < right){
        if(s[left] !== s[right]){
            return false;
        };
        left++;
        right--;
    };
    return true;
};

console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("A man, a plan, a canal: Panama.")) // true
console.log(isPalindrome("Interstellar")) // false

// ALL TESTS PASS