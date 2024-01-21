// Ordered Count of Characters
/*
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

*/


const orderedCount = str => {
  const charCount = new Map();
  for(const char of str){
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  const result = Array.from(charCount, ([char, count]) => [char, count]);
  return result;
}
// tests pass