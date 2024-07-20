// Is it a palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

// const isPalindrome = s => s.toLowerCase() == s.toLowerCase().split('').reverse().join('') ? true : false;
// long expression
// const isPalindromeTwo = str => {
//     str = str.toLowerCase();
//     let rev = str.split('').reverse().join('')
//     return str == rev ? true : false
// }


// done again for practice

// const isPalindromee = x => x.toUpperCase() === x.split('').reverse().join('').toUpperCase() ? true : false;


// @params {string} str
// @return {boolean}
// convert input to same letter casing
// instantiate 2 vars, left and right pointers
// if pointers to do not point to the same value, return false (not a palindrome)

const isPalindrome = str => {
    str = str.toLowerCase();
    var left = 0;
    var right = str.length - 1;
    while(left < right){
        if(str[left] !== str[right]) return false;
        left++;
        right--;
    };
    return true;
};

// time complexity O(n)
// space complexity O(n)