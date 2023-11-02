// Array Difference
/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
arrayDiff([1,2],[1]) == [2]
*/

const arrayDiff = (a, b) => {
    // Create a Set from array b for efficient lookups
    const bSet = new Set(b);
    // Use filter to get elements from array a that are not in b
    const result = a.filter(num => !bSet.has(num));
    return result;
  };
  

console.log(arrayDiff([1,2], [2]), [1]) // test passes

  // arr solution


  const arrayDiffTwo = (a, b) => {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      if (b.indexOf(a[i]) === -1) {
        result.push(a[i]);
      }
    }
    return result;
  };
  

console.log(arrayDiffTwo([1,2], [1]), [2]) // test passes