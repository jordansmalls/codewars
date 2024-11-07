/*
Remove Duplicates from Sorted Array
https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.

Return k.

*/

/*
* @params {number[]} nums
* @return {number}
*/

// 2 pointers, left && right
// begin looking at second value in arr (index 1)
// if nums[right] !== nums[right - 1] => set nums[left] = nums[right] and increment left pointer value by 1
// once loop completes, return left pointer (the number of unique elements) && nums will have been modified in place

const removeDuplicates = nums => {
    let left = 1;
    for(let right = 1; right < nums.length; right++){
        if(nums[right] !== nums[right - 1]){
            nums[left] = nums[right];
            left++;
        };
    };
    return left;
}

console.log(removeDuplicates([1,1,2])) // 2, nums = [1,2]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // 5, nums = [0,1,2,3,4]

// ALL TESTS PASS