// Convert to Binary
/*
Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
*/

// @params {integer} n
// @return {integer}

var toBinary = n => +n.toString(2)


console.log(toBinary(1) ) /* should return 1 */
console.log(toBinary(5) ) /* should return 101 */
console.log(toBinary(11)) /* should return 1011 */


//tests pass