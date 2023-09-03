// Two numbers are positive

// Your job is to write a function, which takes three integers a, b, and c as arguments, and returns True if exactly two of of the three integers are positive numbers (greater than zero), and False - otherwise.


const twoArePositive = (a,b,c) => {
    let solution = false;
    if(a > 0 && b > 0){
      solution = true
    };
    if(a <= 0 && b > 0 && c > 0){
      solution = true
    };
    if(a > 0 && b <= 0 && c > 0){
      solution = true
    };
    if(a > 0 && b > 0 && c > 0){
      solution = false
    };
    if(a <= 0 && b <= 0 && c <= 0){
      solution = false
    }
    return solution
  }


  // refactored
  
const twoArePositiveAgain = (...arr) => arr.filter(e=>e>0).length==2