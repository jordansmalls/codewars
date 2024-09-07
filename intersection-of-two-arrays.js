// Intersection of Two Arrays
/*
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must be unique and you may return the result in any order.
*/

/*
* @params {array[], array[]} nums1, nums2
* @return {array[]}
*/

// create a hash map to store the values present in one of the input arrays
// create a set to store unique values the two input arrays share
// loop over and store the values of one array into the hash map
// loop over the other array and check if present within the hash map already
    // if yes, add to set
// after second loop, return an array filled with values from the set --> Array.from(set)

const intersection = function(nums1, nums2){
    let hashMap = new Map()
    let intersection = new Set()
    for(const value of nums1){
        hashMap.set(value, true)
    }
    for(const value of nums2){
        if(hashMap.get(value)){
            intersection.add(value)
        }
    }
    return Array.from(intersection)
}

console.log(intersection([1,2,2,1], [2,2])) // [2]
console.log(intersection([4,9,5],[9,4,9,8,4])) // [9,4] or [4,9]