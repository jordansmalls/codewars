// Multiplication Table for Number
/*
Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.
*/

const multiTable = n => {
    let table = '';
    for(let i = 1; i <= 10; i++){
      table += `${i} * ${n} = ${i * n}${i < 10 ? '\n' : ''}`; 
    };
    return table;
  }



function multiTableAgain(num){
  let string = "";
  for(let curr = 1; curr <= 10; curr++){
    string += `${curr} * ${num} = ${curr * num}`
    if(curr < 10){
      string += "\n"
    };
  };
  return string
}