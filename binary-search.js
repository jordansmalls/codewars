// Binary Search
/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

var binarySearch = function(array, target){
    let start = 0;
    let end = array.length - 1;

    while(start <= end){
        let middle = Math.floor((start + end) / 2);
        
        if(array[middle] == target){
            return middle;
        };
        if(array[middle] < target){
            start = middle + 1;
        }else{
            end = middle - 1;
        };
    };
    return -1;
}

console.log(binarySearch([-1,0,3,5,9,12],9)) // 4
console.log(binarySearch([-1,0,3,5,9,12],2)) // -1

// tests pass