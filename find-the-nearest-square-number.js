// Find the Nearest Square Number
/*
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

Good luck :)
*/

// function nearestSq(n){
//   let temp = Math.sqrt(n);
//   temp = temp.toFixed(0)
//   return temp*temp
// }

const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

console.log(nearestSq(111)=== 121) // true

