// Fix String Case
/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
*/

// var solve = function(str, upper = 0, lower = 0){
//   for(let i = 0; i < str.length; i++){
//     if(str[i] === str[i].toLowerCase()){
//       lower += 1;
//     }else{
//       upper += 1;
//     }
//   };
//   return lower >= upper == true ? str.toLowerCase() : str.toUpperCase()
// }


var solve = s => {
  var lower = 0;
  var upper = 0;
  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i].toLowerCase())lower +=1;
    else upper++ ;
  };
  return lower >= upper == true ? s.toLowerCase() : s.toUpperCase();
}


// alternative approach
function solve2(s){
  let upper = s.split('').filter(x => x === x.toUpperCase()).length
  let lower = s.length - upper
  return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
}
/*
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/
console.log(solve("coDe")) // "code"
console.log(solve("CODe")) // "CODE"
console.log(solve("coDE")) // "code"

console.log(solve2("coDe")) // "code"
console.log(solve2("CODe")) // "CODE"
console.log(solve2("coDE")) // "code"