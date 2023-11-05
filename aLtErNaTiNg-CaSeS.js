// aLtErNaTiNg CaSeS
/*
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
*/

String.prototype.toAlternatingCase = function () {
    let ans = this.split('').map(char => {
      if(char === char.toLowerCase()){
        return char.toUpperCase();
      }else if(char === char.toUpperCase()){
        return char.toLowerCase();
      }else{
        return char;
      }
    });
    return ans.join('');
  };
  
  // pass
  const input = "Hello, World!";
  const test = input.toAlternatingCase();
  const ans = 'hELLO, wORLD!'
  console.log({input,test,ans})
  