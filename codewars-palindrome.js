// Is it a Palindrome?
/*
Write a function called isPalindrome that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise. Ignore spaces, punctuation, and capitalization when determining if a string is a palindrome.

For example:

    "racecar" is a palindrome.
    "A man, a plan, a canal, Panama!" is a palindrome (ignoring spaces, punctuation, and capitalization).
    "hello" is not a palindrome.
*/

// @param string
// @return boolean

var isPalindrome = function(string){
  // ignoring character casing by converting all string chars to lowercase
  string = string.toLowerCase();
  // declaring a variable to hold filtered string; clean of punctuation marks, casing, and possible spaces
  var filtered = "";
  // initializing a for loop to loop over the string
  for(let i = 0; i < string.length; i++){
    // if character is not a punctuation mark, add to filtered variable
    if(string[i] !== ',' && string[i] !== '.' && string[i] !== '!' && string[i] !== ':' && string[i] !== ';' && string[i] !== '"' && string[i] !== "'"  && string[i] !== "-" && string[i] !== "&"){
      filtered += string[i];
    }
  };
  // removing spaces from filtered string
  filtered = filtered.split(" ").join("");
  // initializing a variable to hold a reversed order of the filtered string
  var reversed = filtered.split("").reverse().join("");
  // returning a boolean value based if filtered string & its reversal are equal; if yes, palindrome (true). if no, not a palindrome (false).
  if(filtered == reversed){
    return true;
  }else return false;
}

// concise version
const isPalindromeOneLine = s => s.toLowerCase().replace(/[^a-z0-9]/g, "") == s.toLowerCase().replace(/[^a-z0-9]/g, "").split("").reverse().join("") ? true : false;

console.log(isPalindrome("racecar")) // true
console.log(isPalindrome("hello")) // false
console.log(isPalindrome("A man, a plan, a canal, Panama!")) // true (ignoring punctuation & capitalization)
console.log(isPalindromeOneLine("racecar")) // true
console.log(isPalindromeOneLine("hello")) // false
console.log(isPalindromeOneLine("A man, a plan, a canal, Panama!")) // true (ignoring punctuation & capitalization)

// tests pass