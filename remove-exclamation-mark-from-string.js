// Exclamation marks series #1: Remove an exclamation mark from the end of string
/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

const remove = str => str.endsWith('!') ? str.slice(0, -1) : str;
console.log(remove("Hi!"), "Hi")
console.log(remove("The Truman Show"), "The Truman Show")
console.log(remove("!Hi!!!"), "!Hi!!")
// test cases pass