// Vowel Count
/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

// input --> str of lowercase only chars & spaces --> no casing issues
// a,e,i,o,u --> chars we are counting
// return the count of vowels in input string
// includes, match, etc

/*
function getCount(string){
  // init a count variable, to return
  var count = 0;
  // init a vowels array, containing "aeieou" as separate indices.
  var vowels = ['a','e','i','o','u'];
  // split input str into array,
  var input = string.split('');
  // iterate over array and if vowelsArray.includes(currValue) == true ? count+=1 : count+=0;
  for(let i = 0; i <= input.length; i++){
    if(vowels.includes(input[i]) == true){
      count++;
    };
  };
  // return the count of variables
  return count;
};
*/

const getCount = str => {
  var c = 0;
  var v = ['a','e','i','o','u'];
  str.split('').forEach(char => v.includes(char) ? c++ : c+=0);
  return c;
}

const getCountShort = str => (str.match(/[aeiou]/ig)||[]).length;


// examples
const test1 = 'jay' // 1 
const test2 = "interstellar" // 4
const test3 = 'aeiou' // 5

console.log(getCount(test1)) // 1
console.log(getCount(test2)) // 4
console.log(getCount(test3)) // 5
console.log(getCountShort(test3)) // 5