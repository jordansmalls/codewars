// Find the Missing Number
/*
You are given an array containing n distinct numbers taken from the range 0 to n. The array is missing one number. Write a function to find and return the missing number.For example:

findMissingNumber([3, 0, 1]); // Should return 2
findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]); // Should return 8
*/
function findMissingNumber(arr){
    let sort = arr.sort((a,b)=>a-b);
    let temp = [];
    for(let i = 0; i < sort.length; i++){
        if(sort[i] !== sort[i + 1] - 1){
            temp.push(sort[i + 1] - 1)
        }
    }
    temp = temp.join('')
    let ans = parseInt(temp)
    return ans
}

console.log(findMissingNumber([3,0,1]), 2)
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8)
console.log(findMissingNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24]), 23)

// pass
// more concise solution
function findMissingNumberAgain(arr){
    let sort = arr.sort((a,b)=>a-b);
    for(let i = 0; i < sort.length; i++){
        if(sort[i] !== i){
            return i
        }
    }
    return sort.length;
}

console.log(findMissingNumberAgain([3,0,1,2,4,6]), 5)
console.log(findMissingNumberAgain([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8)
// test cases pass