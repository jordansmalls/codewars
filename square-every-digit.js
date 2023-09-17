// Square Every Digit

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)



const squareDigits = num => {
    let string = num.toString();
    let res = [];
    for(let i = 0; i < string.length; i++){
        res[i] = string[i] * string[i];
    }
    return Number(res.join(''));
};