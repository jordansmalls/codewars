/*
First non repeating character

Write a function in JavaScript that takes a string as input and returns the first character that does not repeat. If all characters repeat, return null.

Requirements:
    - The function should be case-sensitive (e.g., 'A' and 'a' are considered different characters).
    - Ignore spaces while checking for non-repeating characters.
*/

/**
 *
 * @param {string} string
 * @returns {string}
 */

var firstNonRepeatingChar = function (string) {
  let map = new Map();
  for (const char of string) {
    if (char !== " ") {
      map.set(char, (map.get(char) || 0) + 1);
    }
  }
  for (const [key, value] of map) {
    if (value == 1) {
      return key;
    }
  }
  return null;
};

console.log(firstNonRepeatingChar("swiss cheese"))
// Output: "w"

console.log(firstNonRepeatingChar("aabbcc"))
// Output: null

console.log(firstNonRepeatingChar("hello world"))
// Output: "h"


// ALL TESTS PASS