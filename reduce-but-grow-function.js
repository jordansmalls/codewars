// Reduce but Grow Function
/*
Given a non-empty array of integers, return the result of multiplying the values together in order.
*/

const test = [1, 2, 3, 4];
const grow = arr => arr.reduce((a,c)=>a*c,1)
console.log(grow(test)) // 24

// tests pass
