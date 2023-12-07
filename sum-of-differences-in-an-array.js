// Sum of differences in an array
/*
Your task is to sum the differences between consecutive pairs in the array in descending order.
Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/

const sumOfDifferences = array => {
    if(array.length <= 1){
      return 0;
    };
    let temp = array.sort((a, b) => b - a);
    let sum = 0;
    for(let i = 0; i < temp.length - 1; i++){
      let diff = temp[i] - temp[i + 1];
      if(!isNaN(diff)){
        sum += diff;
      }
    }
    return sum;
  };
  

  console.log(sumOfDifferences([10, 2, 1]), 9);
  console.log(sumOfDifferences([-17, 17]), 34);
  
// test cases pass