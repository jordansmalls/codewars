// Remove First and Last Character

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const removeChar = (str) => {
    let strArr = str.split('');
    let len = strArr.length;
    strArr.shift(0);
    strArr.pop(len);
    let solution = strArr.join('')
    return solution
};