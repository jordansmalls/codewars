// Is it a palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

const isPalindrome = s => s.toLowerCase() == s.toLowerCase().split('').reverse().join('') ? true : false;
// long expression
const isPalindromeTwo = str => {
    str = str.toLowerCase();
    let rev = str.split('').reverse().join('')
    return str == rev ? true : false
}