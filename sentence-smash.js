// Sentence Smash
/*
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
*/

var smash = array => array.join(' ');

const test = ['hello', 'world', 'this', 'is', 'great'] // => 'hello world this is great'
const test2 = ['Interstellar', 'is', 'the', 'greatest', 'movie', 'of', 'all', 'time!'] // "Interstellar is the greatest movie of all time!"
console.log(smash(test)) // "hello world this is great"
console.log(smash(test2)) // "Interstellar is the greatest movie of all time!"

// tests pass