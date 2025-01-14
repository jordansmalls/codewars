// Anagram Checker
/*
Write a function areAnagrams(str1, str2) that checks if two given strings are anagrams of each other.

Anagram Definition: Two strings are anagrams if they contain the same characters, but in any order. The strings are case-insensitive and should ignore spaces.

Constraints:

    The strings can contain alphabetic characters (both uppercase and lowercase).
    The function should ignore spaces and be case-insensitive.
    The function should return a boolean (true or false).

Optimize the solution for performance, especially for larger strings.
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */

// remove whitespace from string, convert all chars to lowercase --> replace w/ regex and toLowerCase method
// create a map, and add chars from string1 into map as keys, and the count of that char as the value
// iterate over the second string, checking if the map has the curr character.
    // if false, return false (second string contains a char not present in the first)
    // else, subtract 1 from the count of the curr char
// check if the count of the curr key value pair is 0, if yes, delete the curr char (the letter appears the same number of times amongst both strings)
// finally, return the comparison of the map's size, and 0.
    // if 0 == 0, the two inputs ARE anagrams of each other
    // else, they are not.

function areAnagrams(str1, str2) {
    str1 = str1.toLowerCase().replace(/[^a-z0-9]/g,'');
    str2 = str2.toLowerCase().replace(/[^a-z0-9]/g,'');
    let map = new Map();
    for(const letter of str1) {
        map.set(letter, (map.get(letter) || 0) + 1);
    };
    for(const letter of str2) {
        if(!map.has(letter)) {
            return false;
        }else {
            map.set(letter, map.get(letter) - 1);
        };
        if(map.get(letter) == 0) {
            map.delete(letter);
        };
    };
    return map.size == 0;
};


console.log(areAnagrams("anagram", "nagaram")) // should return true (same letters, different order)
console.log(areAnagrams("abc", "cba")) // should return true (same letters, reversed)
console.log(areAnagrams("hello world", "dlrow olleh")) // should return true (spaces ignored)
console.log(areAnagrams("hello", "hellooo")) // should return false (different number of letters)
console.log(areAnagrams("", "")) // should return true (empty strings are considered anagrams)
