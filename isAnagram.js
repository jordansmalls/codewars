// Is Anagram
/*
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
*/

/**
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */

// init check of lengths: diff lengths not an anagram
// convert chars to same letter casing
// store chars of the longer word in a map, keeping count
// iterate over the shorter string, reducing the count if curr char is present within the string
// if the count reaches 0, delete the char from the map
// return the map's size being equal to 0 (true if anagram false if not)

const isAnagram = (s,t) => {
    if(s.length != t.length) {
        return false;
    } else {
         s = s.toLowerCase()
         t = t.toLowerCase()

         let map = new Map()

         for(let i = 0; i < s.length; ++i) {
            map.set(s[i], (map.get(s[i]) || 0) + 1);
         };

         for(let j = 0; j < t.length; ++j) {
            if(map.has(t[j])) {
                map.set(t[j], (map.get(t[j])) - 1)
            }else {
                return false;
            };

            if(map.get(t[j]) == 0) {
                map.delete(t[j]);
            };
         };

         return map.size === 0;
    };
};

// Input: s = "racecar", t = "carrace"
// Output: true
console.log(`${isAnagram("racecar", "carrace")} ==> ${true}`)

// Input: s = "jar", t = "jam"
// Output: false
console.log(`${isAnagram("jar", "jam")} ==> ${false}`)

// Input: s = "a", t = "ab"
// Output: false
console.log(`${isAnagram("a", "ab")} ==> ${false}`)

// pass
