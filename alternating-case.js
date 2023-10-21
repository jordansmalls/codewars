// Alternating Case
/*
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 
For example:
"hello world".toAlternatingCase() === "HELLO WORLD"
*/

String.prototype.toAlternatingCase = function () {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      if(this[i] === this[i].toUpperCase()){
        res.push(this[i].toLowerCase());
      }else if(this[i] === this[i].toLowerCase()){
        res.push(this[i].toUpperCase());
      }else{
        res.push(this[i]);
      }
    }
    return res.join('');
  };

  // test cases pass