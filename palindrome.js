// Palindrome?
/*
Your team tasks you with creating a function that can quickly determine if an input string is a palindrome or not. Create a function that returns a boolean value based on if the given string input is a palindrome. Ignore upper or lower casing.
*/

// const palindrome = str => str.toLowerCase() === str.toLowerCase().split('').reverse().join('') ? true : false;


// REFACTOR --> improved space efficiency, avoids unnecessary operations (reversing and joining the string), early termination

const palindrome = function(str) {
    str = str.toLowerCase();
    let left = 0;
    let right = str.length - 1;
    while(left < right) {
        if(str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    };
    return true;
};

console.log(palindrome('racecar'), true)
console.log(palindrome('RaCeCaR'), true)
console.log(palindrome('dad'), true)
console.log(palindrome('Jordan'), false)