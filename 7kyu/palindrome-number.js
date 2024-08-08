// Palindrome Number
// You are tasked with implementing a function isPalindrome that determines whether a given integer is a palindrome. A palindrome is defined as a number that reads the same backward as forward.
var isPalindrome = function (int) {
    if (int < 0) return false;
    var s = int.toString();
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        };
        left++;
        right--;
    };
    return true;
};

console.log(isPalindrome(121)) // true
console.log(isPalindrome(-121)) // false
console.log(isPalindrome(10)) //false
