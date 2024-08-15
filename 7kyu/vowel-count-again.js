// Vowel Count
/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces
*/


// @params {string} string
// @return {number}

// input => string, consisting only of lower case letters and or spaces
// return => number, count of vowels present in input string

// instantiate variable to hold count of vowels present in string
// iterate over string
 // - if string[curr] = aeiou
        // - count++
// return count


// var getCount = function(string){
//     var count = 0;
//     for(let curr = 0; curr < string.length; curr++){
//         if("aeiou".includes(string[curr])){
//             count++;
//         };
//     };
//     return count;
// };

// one line solution
var getCount = string => string.split("").filter(index => 'aeiou'.includes(index)).length

//examples

console.log(getCount("jordan")) // 2 [o,a]
console.log(getCount("interstellar is the best movie ever made.")) // 14 [...]
console.log(getCount("zqrst")) // 0 []
