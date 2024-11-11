// Merge Sorted Array (https://leetcode.com/problems/merge-sorted-array/)
/* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = (nums1,m,nums2,n) => {
    // creating pointer to iterate over the nums1 arr in reverse order
    let last = m + n - 1;
    while(m > 0 && n > 0){
        // if the given element in nums1 > the given element in nums2, nums[last] becomes the given element in the nums1 arr (keeping order) 
        if(nums1[m - 1] > nums2[n - 1]){
            // move value down (keeping sort order)
            nums1[last] = nums1[m - 1];
            // move pointer
            m -= 1;
        }else{
            nums1[last] = nums2[n - 1]
            // move pointer
            n -=  1;
        };
        // move pointer
        last -= 1;
    };

    // handling remaining elements in nums2 arr if necessary
    // if n > 0 ? all elements have not been seen
    while(n > 0){
        // add element (nums2[n - 1]) into remaining open position in nums1 arr
        nums1[last] = nums2[n - 1];
        // move pointer
        n -= 1;
        // move pointer
        last -= 1;
    };
    // checking solution
    console.log(nums1)
}

let test1 = [1,2,3,0,0,0]
let m = 3
let test2 = [2,5,6]
let n = 3

console.log(merge(test1,m,test2,n)) // [1,2,2,3,5,6]
console.log(merge([1],1,[],0)) // [1]


// ALL TESTS PASS