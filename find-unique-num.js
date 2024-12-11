// Find the Unique Number
/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!
*/

/**
 * @param {number[]} array
 * @return {number}
 */


// BFA:
// create a hashmap to store the input nums as keys and the count of them as their values
// iterate over the map, if the current key has a value of 1, return key as it is unique
// if the hashmap does not contain a unique value, return null

var findUniq = function(array) {
    let hashmap = new Map();
    for(const num of array) {
        hashmap.set(num, (hashmap.get(num) || 0) + 1);
    };
    for(const [key, value] of hashmap) {
        if(value == 1) {
            return key;
        };
    };
    return null;
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])) // 2
console.log(findUniq([ 0, 0, 0.55, 0, 0 ])) // === 0.55

