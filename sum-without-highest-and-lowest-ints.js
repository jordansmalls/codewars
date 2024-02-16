// Sum without Highest and Lowest Ints
/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
Example

[ 6, 2, 1, 8, 10 ] => 16
[ 1, 1, 11, 2, 3 ] => 6

Input validation

If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/
// const sumArray = a => {
//     a = a.sort((a,b)=>a-b);
//     a.pop();
//     a.shift();
//     return a.reduce((a,c)=>a+c,0)
// }

const sumArray = a => a.slice().sort((a, b) => a - b).slice(1, -1).reduce((a, c) => a + c, 0);

const x = [ 6, 2, 1, 8, 10 ];
const y = [ 1, 1, 11, 2, 3 ];
console.log(sumArray(x) == 16) // true
console.log(sumArray(y) == 6) // true

//tests pass