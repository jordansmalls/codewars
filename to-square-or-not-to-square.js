// To square (root) or not to square (root)
/*
Write a method, that will get an integer array as parameter and will process every number from this array. Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
*/

const squareOrSquareRoot = arr => {
    return arr.map(num => {
        const sqRoot = Math.sqrt(num);
        if(Number.isInteger(sqRoot)){
            return sqRoot
        }else{
            return num**2
        }
    })
}

let test = squareOrSquareRoot([4,3,9,7,2,1])
let ans = [2,9,3,49,4,1]
console.log({test, ans})

// concise syntax

const squareOrSquareRootAgain = arr => {
    return arr.map(num => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num ** 2);
}
