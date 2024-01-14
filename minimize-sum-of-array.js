// Minimize Sum of Array
//Task
//Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product.

const minSum = ([...arr]) => arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);

// tests pass
