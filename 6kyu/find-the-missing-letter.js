// Find the Missing Letter
/*

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'


findMissingLetter
*/



// input -> array: consecutive, increasing, letters 
// return -> string: "missing letter"


// input arrays will always be valid && have a length of at least 2
// characters in array will always be lowercase
// only ONE character will always only be missing


// find the charCodeAt() the first letter in array
// find the charCodeAt() the last letter in the array
// create a temp array, instantiate a for loop
    // - in for loop: push to temp array the consecutive characters that are SUPPOSED to be in the input arr

// with another sort of loop:
    // - compare temp array and input arr
        // - if temp[curr] !== input[curr]
            // - return that character


// @params {array[]} array
// @return {string}

// var findMissingLetter = function(array){
//     var temp = [];
//     var firstLetterCharCode = array[0].charCodeAt(0);
//     var lastLetterCharCode = array[array.length - 1].charCodeAt(0);
//     for(let curr = firstLetterCharCode; curr <= lastLetterCharCode; curr++){
//         temp.push(String.fromCharCode(curr));
//     }
//     for(let i = 0; i < temp.length; i++){
//         if(array[i] !== temp[i]){
//             return temp[i];
//         };
//     };
// };

// condensed
var findMissingLetter = arr => {
    var first = arr[0].charCodeAt(0);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charCodeAt(0) !== first + i) {
            return String.fromCharCode(first + i);
        };
    };
};

// time complexity- O(n)



// alternate solution
function getExpectedNextLetter(currentLetter) {
    var currentCharCode = currentLetter.charCodeAt();
    return String.fromCharCode(currentCharCode + 1);
  }
  
  function findMissingLetter(letters) {
    for (var i = 0; i < letters.length; i++) {
      var expectedNextLetter = getExpectedNextLetter(letters[i]);
      var nextLetter = letters[i + 1];
      if (expectedNextLetter !== nextLetter) return expectedNextLetter;
    }
  }

console.log(findMissingLetter(['a','b','c','d','f'])) // 'e'