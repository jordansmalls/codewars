/* 
Merge Strings Alternately (Leetcode: https://leetcode.com/problems/merge-strings-alternately/description/)

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string. Return the merged string. 
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

function mergeAlternately(word1: string, word2: string): string {
    let result: string[] = [];
    let length1: number = word1.length;
    let length2: number = word2.length;
    let i: number = 0;
    while(i < length1 || i < length2) {
        if(i < length1) {
            result.push(word1[i]);
        };
        if(i < length2) {
            result.push(word2[i]);
        };
        i++;
    };
    return result.join("");
};
