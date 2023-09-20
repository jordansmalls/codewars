/* 
Is the string uppercase?

Create a method to see whether the string is ALL CAPS.
*/


// solution

const isUpperCase = str => {
  let x = str.toUpperCase();
  if(str === x){
    return true
  }else{
    return false
  }
};


// solution formatted for codewars kata

String.prototype.isUpperCase = function() {
    // your code here
   let str = this.toString();
    let strUpper = str.toUpperCase();
    if(str === strUpper){
      return true
    }else{
      return false
    }
  };