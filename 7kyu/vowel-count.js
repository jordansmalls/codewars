// Vowel Count
/*
Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

var getCount = str => {
  var count = 0;
  var arr = str.split("").forEach(char => {
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u") count++
  });
  return count
}

console.log(getCount('abracadabra')) // 5
console.log(getCount('pear tree')) // 4
console.log(getCount('o a kak ushakov lil vo kashu kakao')) // 13

// TESTS PASS