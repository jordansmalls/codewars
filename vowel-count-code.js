// Count the Vowels
/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

const getCount = str => {
  var count = 0;
  var temp = str.split('').forEach(char => {
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
      count++;
    }
  })
  return count
}


const getCountAlt = str => str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
 

console.log(getCount('jay')) // 1
console.log(getCount('carson')) // 2
console.log(getCount('bojack horseman')) // 5
console.log(getCountAlt('bojack horseman')) // 5

// tests pass
// tests pass
