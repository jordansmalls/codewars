// Sum of Numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


const getSum = (a,b) => {
    let counter = [];
    if(a < b){
      for(let i = a; i <= b; i++){
        counter.push(i)
      }
    }else{
      for(let i = b; i <= a; i++){
        counter.push(i)
      }
    }
    return counter.reduce((acc,c)=>acc+c,0)
  }

  // tests pass



// alternate solution

const getSumTwo = (a, b) => (a + b) * (Math.abs(a - b) + 1) / 2;



// practice a month later

const getSumAgain = (a,b) => {
  let sum = 0;
  if(a == b){
    return a
  }else if(a < b){
    for(let i = a; i<=b;i++){
      sum += i
    }
  }else{
    for(let i = b; i<=a;i++){
      sum += i
    }
  }
  return sum
}