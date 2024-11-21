/*
First Missing Letter

Write a function that accepts a string that contains all the letters of the alphabet except one and returns the missing leter. For example, the string, "the quick brown box jumps over a lazy dog" contains all of the letters of the alphabet except the letter "f". The function should have a time complexity of O(N).

*/

/**
 * @param {string} string
 * @return {string}
*/


// brute force
// create alphabet from iterating 1-26 and bulding a string w/  charCode + iterator
// iterate over input string, deleting letter (key) from map
// return whatever key remains in map (the one missing letter)
/*
function firstMissingLetter(string: string): string | undefined {
    let alphabet: Map<string,number> = new Map();
    for(let i = 0; i < 26; i++) {
        const letter: string = String.fromCharCode(97 + i);
        alphabet.set(letter, 1);
    };
    for(const letter of string) {
        alphabet.delete(letter)
    }
    for(const [key,value] of alphabet) {
        return key
    }
}
*/


// optimized for better space efficiency --> not storing key value pairs ~ 1/2 saved
// could save more without temp array
function firstMissingLetter(string: string): string {
    let alphabet: Set<string> = new Set("abcdefghijklmnopqrstuvwxyz");
    for(const letter of string) {
        if(alphabet.has(letter)) {
            alphabet.delete(letter);
        };
    };
    return [...alphabet][0];
};
