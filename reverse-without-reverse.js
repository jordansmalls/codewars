// Reverse Without Reverse 
/*
Here's another JavaScript coding challenge for you:
Write a JavaScript function that reverses a given string. You can use any method or algorithm you prefer.

For example:

reverseString("hello"); // should return "olleh"
reverseString("world"); // should return "dlrow"
reverseString("JavaScript"); // should return "tpircSavaJ"

Requirements: Implement the function without using the built-in reverse method.
*/

const reverseString = str => {
    let temp = [];
    let arr = str.split('');
    for(let i = arr.length - 1; i >= 0; i--){
        temp.push(arr[i])
    }
    return temp.join('')
}
console.log(reverseString("hello"), 'olleh');
console.log(reverseString("world"), 'dlrow'); 