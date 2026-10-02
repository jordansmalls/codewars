// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
// Anagram Detection

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples: "foefet" is an anagram of "toffee", "Buckethead" is an anagram of "DeathCubeK"


function isAnagram(original, test) {
    if (test.length !== original.length) return false;

    test = test.toLowerCase();
    original = original.toLowerCase();
    const map = new Map();

    for(const index of original) {
        map.set(index, (map.get(index) || 0) + 1);
    };

    for(const index of test) {
        if(!map.has(index)) {
            return false;
        } else {
            map.set(index, (map.get(index)-1));
            if(map.get(index) === 0) map.delete(index);
        };
    };
    return map.size === 0;
};