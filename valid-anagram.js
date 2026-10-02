// // Valid Anagram
// /*
// Given two strings s and t, return true if t is an anagram of s, and false otherwise. s and t consist of lowercase English letters.
// */

// /**
//  * @param {string} s
//  * @param {string} t
//  * @returns {boolean}
//  */

// function isAnagram(s, t) {

//   // clean strings to be only lowercase letters (no special chars)
//   s = s.replace(/[^a-z]/g,'')
//   t = t.replace(/[^a-z]/g,'')

//   // return false if strings are different lengths
//   if(s.length !== t.length) return false;

//   // create a map, to store letters as keys and their count as values
//   let map = new Map();
//   for(const letter of s) {
//     map.set(letter, (map.get(letter) || 0) + 1);
//   };

//   // iterate over second string, t, subtracting 1 from the count for each appearance of the same letter.

//   for(const letter of t) {
//     // if the string t contains a letter not present within string s, not anagrams
//     if(!map.has(letter)) {
//       return false;
//     } else {
//       map.set(letter, map.get(letter) - 1);
//     };

//     // if number of times each letter appears in each string matches, delete the key value pair from the map
//     if(map.get(letter) == 0) {
//       map.delete(letter);
//     };
//   };

//   // if letters in both strings were used the same number of times, the map being empty should be true else false
//   return map.size == 0;
// }

// console.log(isAnagram("anagram", "nagaram")) // true
// console.log(isAnagram("abc", "a b c")) // true
// console.log(isAnagram("rat", "car")) // false


// Refactor

// input => two strings, s & t, only consist of lowercase characters
// output => boolean, true only if the two strings contain the same letters and counts


// clean the input strings (remove punctuation, spaces, or any other funny business)
// if the input strings length's dont equal, early return false (invalid anagram)

// create a hashmap, to iterate over the input string s, storing characters as keys and their counts as values
// iterate over the second string,

  // early exit: if the curr char is not present already in the map, return false (invalid anagram)
  // decrement the count for the curr character
  // if the count is 0 after decrementing, delete the key from the map


// return the comparison of the maps size being equal to 0 (valid anagram, counts and letters were equal)


const isAnagram = function(s,t) {
  s = s.replace(/[^a-z]/g, '');
  t = t.replace(/[^a-z]/g,'')
  if(s.length !== t.length) return false;

  const map = new Map();

  for(const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  };

  for(const char of t) {
    if(!map.has(char)) {
      return false;
    } else {
     map.set(char, (map.get(char) - 1));
     if(map.get(char) === 0) map.delete(char);
    };
  };
  return map.size === 0;
};



console.log(isAnagram("anagram", "nagaram")) // true
console.log(isAnagram("abc", "a b c")) // true
console.log(isAnagram("rat", "car")) // false