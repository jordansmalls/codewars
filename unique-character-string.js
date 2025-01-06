// Unique Character String
/*
Write a function hasUniqueChars that determines if a string has all unique characters. The function should return true if the string has all unique characters, and false otherwise.

Constraints:

    The string may contain any printable ASCII characters (letters, digits, symbols, spaces, etc.).
    The function should be optimized in terms of time and space complexity.
*/

/**
 * @param {string} string
 * @returns {boolean}
 */

// Space: O(n) Time: O(n)
// create a set and add the chars of input string to set
// return the comparison of the set's size and the length of the string (sets store unique values only)

const hasUniqueChars= string => new Set(string).size === string.length


// Space: O(1) Time: O(n log n)
// if minimal space is the highest concern:
// sort the input string
// create pointer to compare adjacent chars
    // if the comparison returns true, return false
// if string contains unique chars, return true

function hasUniqueCharsAgain(string) {
    string = string.split("").sort().join("");
    let pointer = 0;
    while(pointer < string.length) {
        if(string[pointer] == string[pointer + 1]) {
            return false;
        };
        pointer += 1;
    };
    return true;
}



console.log(hasUniqueChars("abcdef"))  // true
console.log(hasUniqueChars("aabbcc"))  // false
console.log(hasUniqueChars("12345"))   // true
console.log(hasUniqueChars("abcdeaf")) // false


console.log(hasUniqueCharsAgain("abcdef"))  // true
console.log(hasUniqueCharsAgain("aabbcc"))  // false
console.log(hasUniqueCharsAgain("12345"))   // true
console.log(hasUniqueCharsAgain("abcdeaf")) // false


// ALL TEST PASS