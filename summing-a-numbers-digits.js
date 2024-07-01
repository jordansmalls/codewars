// Summing A Numbers Digits
/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
Let's assume that all numbers in the input will be integer values.
*/


// @param {integer}
// @return {integer}

// var sumDigits = function(num){
//     var temp = Math.abs(num);
//     temp = temp.toString();
//     temp = temp.split('');
//     for(let i = 0; i < temp.length; i++){
//         temp[i] = +temp[i]
//     }
//     console.log(temp)
//     return temp.reduce((acc,c)=>acc+c,0)
// }


var sumDigits = number => Math.abs(number).toString().split('').reduce((acc,val)=>acc + Number(val), 0)

console.log(sumDigits(10)) // 1
console.log(sumDigits(99)) // 18
console.log(sumDigits(-32)) // 5

// tests pass
