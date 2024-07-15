// Palindrome Number
/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

// @params {integer} int
// @return {boolean}
// two pointer approach - check if input is neg, if yes, return false
// init vars for input conv to str, left pointer, right pointer
// loop -> if left pointer !== right pointer return false (not a palindrome)
// increment & decrement vars
// if loop ends, return true (is a palindrome)

var isPalindrome = function(int){
    if(int < 0) return false;
    var str = int.toString();
    var left = 0;
    var right = str.length - 1;
    while(left < right){
        if(str[left] !== str[right]){
            return false;
        };
        left++;
        right--;
    };
    return true
}

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) // false
