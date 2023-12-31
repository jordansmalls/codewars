// Odd or Even?

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).


// reduce method
const oddOrEven = arr => {
    let sum = arr.reduce((acc,c)=>acc + c,0)
    if(sum % 2 === 0){
        return 'even'
    }else{
        return 'odd'
    }
};

// for loop
const oddOrEvenAgain = arr => {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
    }
  if(sum % 2 === 0){
    return 'even'
  }else{
    return 'odd'
  }
}