// Two to One
/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// const longest = (a,b) => {
//   let str = a + b;
//   let temp = str.split('').sort().join('');
//   let result = new Set(temp);
//   return Array.from(result).join('')
// }

// concise ans

const longest = (a,b) => {
  const result = new Set((a+b).split('').sort().join(''));
  return Array.from(result).join('');
}


const a = "xyaabbbccccdefww"
const b = "xxxxyyyyabklmopq"
const ans = "abcdefklmopqwxy"
console.log(longest(a, b) === ans)


// test cases pass