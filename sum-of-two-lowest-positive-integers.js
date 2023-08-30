// Sum of two lowest positive integers

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

const sumTwoSmallestNumbers = nums => {
    let arr = nums.sort((a,b)=>a-b)
    let ans = arr[0] + arr[1]
    return ans
};