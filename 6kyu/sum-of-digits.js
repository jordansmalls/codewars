// Sum of Digits/Digital Root
/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

*/


/*
* @params {integer} n
* @return {integer}
*/

// init check: if input <= 10, return n (not greater than 2 digits)
// create a var to store the input converted to a string, split into an array & indices converted back into nums --> Array.from(string, Number (to convert back to ints))
// check: if arr.length == 1 ? return the first index aka the final solution
// create var to store the sum --> create a loop to iterate over the arr and find sum, reduce method

// to use recursion, return the function itself with the sum var argued

var digitalRoot = function(n){
    if(n <= 10) return n;
    let arr = Array.from(n.toString(), Number);
    if(arr.length == 1) return arr[0];
    let sum = arr.reduce((acc,c)=>acc+c,0);
    return digitalRoot(sum);
};


console.log(digitalRoot(16)) // 1 + 6 = 7
console.log(digitalRoot(942)) // 9 + 4 + 2 = 15  -->  1 + 5 = 6
console.log(digitalRoot(132189)) // 1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
console.log(digitalRoot(493193)) //  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2