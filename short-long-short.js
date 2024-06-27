// Short Long Short
/*
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
*/

// var solution = function(a,b){
//   var l1 = a.length;
//   var l2 = b.length;
//   if(l1 > l2){
//     return `${b}${a}${b}`;
//   }else{
//     return `${a}${b}${a}`;
//   }
// }


var solution = (a,b) => a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;

console.log(solution("1", "22")) // returns "1221"
console.log(solution("22", "1")) // returns "1221"