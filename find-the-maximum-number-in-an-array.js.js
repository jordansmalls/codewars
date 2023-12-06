// Find the Maximum Number in an Array
/*
Write a function that finds the maximum number in an array of numbers.
*/

// const maximumNumber = array => array.sort((a,b)=>a-b)[array.length -1]

console.log(maximumNumber([3, 9, 1, 7, 5]), 9); // Output: 9
console.log(maximumNumber([-1, -5, -3]), -1); // Output: -1
console.log(maximumNumber([]), undefined); // Output: undefined

// pass

// more efficient approach

const maximumNumber = array => {
    if(array.length === 0){
        return undefined
    };
    let max = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }
    return max
}
