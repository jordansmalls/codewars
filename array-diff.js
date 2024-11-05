// Array.diff

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

const arrayDiff =(a,b)=>a.filter(e => !b.includes(e));
  

// ONE LINE SOLUTION
const arrayDiffAgain = (a, b) => a.reduce((acc, value) => !b.includes(value) ? [...acc, value] : acc, []);


console.log(arrayDiff([1,2],[1])) // [2]
console.log(arrayDiffAgain([1,2],[1])) // [2]
console.log(arrayDiff([1,2,2,2,3], [2])) // [1,3]
console.log(arrayDiffAgain([1,2,2,2,3], [2])) // [1,3]


// ALL TESTS PASS
