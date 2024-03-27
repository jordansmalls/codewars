// Odd-Even String Sort
/*
  Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.
*/

/*

input --> string
return --> a new string, with even indexed chars grouped ==> space ==> odd indexed chars grouped

create 2 strings - one even, one odd
create a for loop - if else statement ~~> if increment % (mod) 2 === 0 ? add char (index) to even str else add char (index) into odd str
return a template literal, `${evenStr} ${oddStr}`
*/

// function sortMyString(str){
//   // init 2 variables -> evenString and oddString
//   var evenString = '';
//   var oddString = '';
//   // handle first char added to evenString
//   evenString += str[0];
//   // init for loop for iteration over input string
//   for(let i = 1; i < str.length; i++){
//     if(i % 2 === 0){
//       evenString = evenString + str[i];
//     }else{
//       oddString = oddString + str[i];
//     }
//   };
//   // return template literal string with necessary space included between to string vals
//   return (`${evenString} ${oddString}`)
// }

const sortMyString = str => {
  var evenStr = '';
  var oddStr = '';
  for(let i = 0; i < str.length; i++){
    if(i % 2 == 0) evenStr += str[i];
    else oddStr += str[i];
  };
  return `${evenStr} ${oddStr}`
}

// alternate solution
const sortMyStringAgain = s => {
  let even = s.split('').filter((v, i) => i % 2 === 0).join('')
  let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
  return even + ' ' + odd
}
const test = "CodeWars";
const ans = "CdWr oeas";
console.log(sortMyString(test) === ans) // true