/*
First Duplicate String

You are tasked with writing a function, firstDuplicate, that takes an array of strings and identifies the first string that appears more than once in the array. If no duplicate exists, the function should return null.

Make sure the function has an efficiency of O(N).
*/

/**
 * @param {string[]} array
 * @returns {string}
 */

function firstDuplicate(array: string[]): string | null {
    let map = new Map();
    for(const idx of array) {
        if(map.has(idx)) {
            return idx;
        }else {
            map.set(idx,true);
        };
    };
    return null;
};

