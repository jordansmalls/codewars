// Square Every Digit
/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 7^2 is 49, 6^2 is 36, and 5^2 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.

Happy Coding!
*/

/*
var squareDigitsAgain = n => {
    var arr = n.toString().split("");
    arr = arr.map(index => {
        index = +index;
        index = index**2;
        return index.toString();
    });
    return Number(arr.join(''))
}

function squareDigits(num){
    var str = num.toString();
    var arr = str.split("");
    for(let i = 0; i < arr.length; i++){
        arr[i] = +arr[i];
        arr[i] = arr[i]**2;
        arr[i] = arr[i].toString();
    };
    var res = arr.join('')
    return +res
}

// time complexity -> 1 step, 1 step, up to N steps (based on the length of input num), 1 step ==> 1+1+1+N steps => N + 3 steps -> O(n) linear time

*/
// concise
const squareDigits = n => +n.toString().split('').map(digit => (+digit) ** 2).join('')

// 2112 -> '2112' -> ['2', '1', '1', '2'] -> [4, 1 , 1 , 4] -> ['4', '1', '1','4'] -> '4114' -> 4114


// examples
console.log(squareDigits(2112)) //  4114
console.log(squareDigits(9119))
console.log(squareDigits(765))
// tests pass