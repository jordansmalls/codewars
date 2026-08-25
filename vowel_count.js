// Vowel Count
// Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.

const getCount = (string) => {
  let count = 0;
  let vowels = 'aeiou';
  for (const letter of string) {
    if (vowels.includes(letter)) count += 1;
  }
  return count;
};