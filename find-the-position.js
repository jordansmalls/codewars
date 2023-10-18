// Find the position!
/*
When provided with a letter, return its position in the alphabet.
Input :: "a"
Ouput :: "Position of alphabet: 1"
*/
const position = letter =>
  /[a-zA-Z]/.test(letter)
    ? `Position of alphabet: ${letter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1}`
    : 'Invalid input: Please provide a single letter from the alphabet';

//test cases pass