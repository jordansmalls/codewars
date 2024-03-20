// Merging Unsorted Strings
/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
*/

function longest(a,b){
  var newStr = a + b;
  var uniqueChars = new Set([...a,...b]);
  var arr = Array.from(uniqueChars).sort();
  return arr.join('');
}

// shorter syntax
const longestShort = (a,b) => Array.from((new Set(a+b))).sort().join('')



const a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";
const ans = "abcdefklmopqwxy";
console.log(longest(a, b) === ans) // true
console.log(longestShort(a,b) === ans) // true
// tests pass