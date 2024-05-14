// Multiples of 3 or 5
/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

/*
var solution = function(n){
  if(n < 0) return 0;
  var sum = 0;
  for(let i = 0; i < n; i++){
    if(i % 3 == 0 || i % 5 == 0) sum += i;
  }
  return sum;
};
*/

// one line solution :)
const solution = n => n <= 0 ? 0 : Array.from({ length: n }, (_, i) => i).filter(i => i % 3 === 0 || i % 5 === 0).reduce((acc, c) => acc + c, 0);

