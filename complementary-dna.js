// Complementary DNA
/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
*/

var dnaStrand = function(string){
  var result = "";
  var temp = string.split("").forEach(char => {
    if(char == "T") result += "A";
    else if(char == "A") result += "T";
    else if(char == "G") result += "C";
    else if(char == "C") result += "G";
  })
  return result;
};


// alt solution
let pairs = {A:'T',T:'A',C:'G',G:'C'};
const dnaStrandAgain = dna => dna.replace(/./g, c => pairs[c]);


const test = "ATTGC";
const testTwo = "GTAT";
console.log(dnaStrand(test)) // --> "TAACG"
console.log(dnaStrand(testTwo)) // --> "CATA"
console.log(dnaStrandAgain(test)) // --> "TAACG"
console.log(dnaStrandAgain(testTwo))// --> "CATA"


// all tests pass