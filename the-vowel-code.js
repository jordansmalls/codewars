// The Vowel Code
/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

/*
 * @params {string} string
 * @return {string}
 */

// BRUTE FORCE APPROACH & READABLE
var encode = function (string) {
  let result = new Array();
  for (let curr = 0; curr < string.length; curr++) {
    let char = string[curr];
    if (char == "a") {
      result.push(1);
    } else if (char == "e") {
      result.push(2);
    } else if (char == "i") {
      result.push(3);
    } else if (char == "o") {
      result.push(4);
    } else if (char == "u") {
      result.push(5);
    } else {
      result.push(char);
    }
  }
  return result.join("");
};

// more concise
const encodeAgain = (string) =>
  string.replace(/[aeiou]/g, (g) => "aeiou".indexOf(g) + 1);

/*
 * @params {string} string
 * @return {string}
 */

// BRUTE FORCE APPROACH & READABLE
var decode = function (string) {
  let result = new Array();
  for (const char of string) {
    if (char == "1") {
      result.push("a");
    } else if (char == "2") {
      result.push("e");
    } else if (char == "3") {
      result.push("i");
    } else if (char == "4") {
      result.push("o");
    } else if (char == "5") {
      result.push("u");
    } else {
      result.push(char);
    }
  }
  return result.join("");
};

// more concise
const decodeAgain = (string) =>
  string.replace(/[1-5]/g, (g) => "aeiou"["12345".indexOf(g)]);

console.log(decode(encode("hello"))); // "hello"
console.log(decodeAgain(encodeAgain("hello"))); // "hello"

// OPTIMIZED SOLUTION

const encodeMap = { a: "1", e: "2", i: "3", o: "4", u: "5" };
const decodeMap = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };

const encodeOpt = (string) =>
  string.replace(/[aeiou]/g, (char) => encodeMap[char]);

const decodeOpt = (string) => string.replace(/[1-5]/g, (num) => decodeMap[num]);

console.log(decodeOpt(encodeOpt("hello"))); // "hello"

// ALL TESTS PASS
