// Find numbers which are divisible by a given number

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

const divisibleBy = (nums, div) =>{
    let res = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] % div == 0){
            res.push(nums[i])
        }
    }
    return res
}

// additional solution

const divisibleByTwo = (numbers, divisor) => numbers.filter(number => !(number % divisor));