// Draw a Triangle
/*
Create a JavaScript function drawTriangle(n) that takes an integer n as input and generates a triangle pattern using asterisks (*). The triangle should have n rows, with each row containing an increasing number of asterisks, starting from one asterisk in the first row and ending with n asterisks in the last row. The function should return the generated triangle as a string.

Challenge:

Write a JavaScript function drawTriangle(n) that outputs a triangle pattern of asterisks with n rows. Ensure that each row has the appropriate number of asterisks according to its position in the triangle. For example, if n is 5, the output should be:


*
**
***
****
*****
Your function should handle edge cases gracefully, such as when n is 0 or negative. It should also return an empty string when n is 0. Test your function with different values of n to ensure its correctness.
*/

// function drawTriangle(n){
//   let str = '';
//   let result = '';
//   for(let i = 0; i < n; i++){
//     str += '*';
//     result += str + '\n';
//   }
//   return result;
// }

const drawTriangle = n => {
  let res = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      res += '*';
    }
    res += '\n';
  }
  return res;
}


console.log(drawTriangle(5))

/*
*
**
***
****
*****
*/