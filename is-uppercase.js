// Is the string uppercase?
/*
Create a String object method that checks whether the string is ALL CAPS.
*/

String.prototype.isUpperCase = function(){
    let str = this.toString();
    let upper = str.toUpperCase();
    if(str === upper)return true;
    else return false;
};

let test = 'Interstellar'
let test2 = 'ATTACK ON TITAN'
console.log(test.isUpperCase(), false)
console.log(test2.isUpperCase(), true)
// test cases pass