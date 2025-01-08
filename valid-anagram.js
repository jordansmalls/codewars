// Valid Anagram
/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise. s and t consist of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */

function isAnagram(s, t) {

  // clean strings to be only lowercase letters (no special chars)
  s = s.replace(/[^a-z]/g,'')
  t = t.replace(/[^a-z]/g,'')

  // return false if strings are different lengths
  if(s.length !== t.length) return false;

  // create a map, to store letters as keys and their count as values
  let map = new Map();
  for(const letter of s) {
    map.set(letter, (map.get(letter) || 0) + 1);
  };

  // iterate over second string, t, subtracting 1 from the count for each appearance of the same letter.

  for(const letter of t) {
    // if the string t contains a letter not present within string s, not anagrams
    if(!map.has(letter)) {
      return false;
    } else {
      map.set(letter, map.get(letter) - 1);
    };

    // if number of times each letter appears in each string matches, delete the key value pair from the map
    if(map.get(letter) == 0) {
      map.delete(letter);
    };
  };

  // if letters in both strings were used the same number of times, the map being empty should be true else false
  return map.size == 0;
}

console.log(isAnagram("anagram", "nagaram")) // true
console.log(isAnagram("abc", "a b c")) // true
console.log(isAnagram("rat", "car")) // false