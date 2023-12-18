// Find Maximum Integer
/*
Write a function findMax that takes an array of numbers as a parameter and returns the maximum number in the array.
Your task is to implement the findMax function so that it correctly identifies and returns the maximum number in the given array. You cannot mutate the original array.
*/

const findMax = arr => {
    let temp = arr.slice().sort((a,b)=>a-b);
    return temp[temp.length - 1];
};
console.log(findMax([100,101,200,201,500,501]),501)
console.log(findMax([1,2,3,4,5,6,7,8,9,10]),10)
// tests pass


// alternate efficient solution, binary search algo
const binarySearchMax = arr => {
    let low = 0;
    let high = arr.length - 1;
    while(low < high){
      const mid = Math.floor((low + high) / 2);
      if(arr[mid] < arr[mid + 1]){
        // The maximum number is to the right of mid
        low = mid + 1;
      }else{
        // The maximum number is to the left of or at mid
        high = mid;
      }
    }
    // arr[low] is the maximum number
    return arr[low];
  };
console.log(binarySearchMax([100,200,300,400,500]), 500)
console.log(binarySearchMax([0,1,2,4,7,8,11,15,23]), 23)
console.log(binarySearchMax([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]), 100)

// tests pass