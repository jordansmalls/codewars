// Intersection of Arrays
/*
Given two input arrays, array1 and array2, return an array containing the points of which the two arrays intersect.
*/


/*
* @params {array[], array[]} array1, array2
* @return {array[]}
*/

const intersection = function(array1, array2){
    let hashMap = new Map();
    let intersection = new Set();
    for(const value of array1){
        hashMap.set(value, true);
    }
    for(const value of array2){
        if(hashMap.get(value)){
            intersection.add(value);
        }
    }
    return Array.from(intersection);
}

console.log(intersection([1,2,3,4,5],[2,5,7] )) // [2,5]
console.log(intersection(["apple", "banana", "cherry"], ["banana", "cherry", "date"])) // Output: ['banana', 'cherry']
console.log(intersection([1.1, 2.2, "hello", 4.4], [2.2, "hello", 5.5])) // Output: ['2.2', 'hello']
