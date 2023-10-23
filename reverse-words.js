// Reverse Words
/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

const reverseWords = s => {
    let arr = s.split(' ')
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].split('').reverse().join('')
    }
    return arr.join(' ')
}
// tests pass

// alternate solution

function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }