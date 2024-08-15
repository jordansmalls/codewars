// Valid Palindrome
/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/


// @params {string} string
// @return {boolean}

// input -> string: containing uppercase and lowercase letters, spaces, commas, etc
// return -> boolean: if after all letters are converted to lowercase, ALL punctuation is removed, rev == norm ==> true else: false

// edge case where input string length is 1 or empty: string.length <= 1
// convert string to lowercase chars only: toLowerCase() string method
// instantiate arr to hold only chars AKA remove punctuation
// create loop to iterate over string
    // 'abcdefghijklmnopqrstuvwxyz'.includes(string[currentChar]) => arr.push(string[currentChar])

// declare variables to hold new arr joined in normal order and reversed order
// return comparison of normal and reversed being equal

var isPalindrome = string => {
    if(string.length <= 1) return true;
    string = string.toLowerCase();
    var chars = [];
    for(let curr = 0; curr < string.length; curr++){
        if('abcdefghijklmnopqrstuvwxyz'.includes(string[curr])){
            chars.push(string[curr])
        };
    };
    var normal = chars.join('');
    var reversed = chars.reverse().join('');
    return normal === reversed
}



// more readable & optimized

var isPalindrome = function(string){
    if(string.length <= 1) return true;
    string = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    return string === string.split('').reverse().join('');
}

// time complexity: O(N)
// space complexity: O(N)

console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("racecars")) // false
console.log(isPalindrome(" ")) // true
console.log(isPalindrome("A man, a plan, a canal: Panama")) // true

// tests pass