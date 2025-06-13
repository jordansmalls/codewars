// First Unique Character in a String
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
/*

Example 1:
Input: s = "leetcode"
Output: 0
Explanation: The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1



Constraints:

    1 <= s.length <= 105
    s consists of only lowercase English letters.
*/


// input -> strings containing only lowercase english letters
// output -> index in which the unique letter exists within the input string (if there is one)
// create a map to store chars and their count
// iterate over the input string, tracking their count and index
    // while iterating, if the char exists within the string: overwrite its value to be false (not unique)
    // if the char does not exist, set count as 1 and store position in string
// iterate over the map, looking for a key that has a value[0] of 1 (unique character)
    // if found, return its index
// return -1 if no unique chars exist within the input string

/**
 *
 * @param {string} s
 * @returns {number}
 */

const firstUniqChar = s => {
    const map = new Map();
    let pointer = 0;
    while(pointer < s.length) {

        const char = s[pointer];
        if(map.has(char)) {
            map.set(char, false);
        } else {
            map.set(char, [1, pointer]);
        };
        pointer++;
    };
    for(const [key, value] of map) {
        if(value !== false) {
            return value[1]
        };
    };
    return -1;
};

console.log(firstUniqChar("leetcode")) //