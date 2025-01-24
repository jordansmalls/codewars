// Reverse Vowels of a String
/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Leetcode Easy
*/

/**
 * @param {string}  s
 * @return {string}
 */

// Brute Force:
// note: vowels can be both uppercase and lowercase
// create two different stacks; one to hold the chars that remain in order, and one to hold vowels and eventually reverse their order
// create a string that holds both lowercase and uppercase vowels? or just toLowerCase during each check
// when iterating over the input string, if the curr character is a vowel, push a placeholder char into the stack to maintain placement of vowels and add vowel to the other stack with only vowels
// create a result variable to store the result
// iterate through the maintained order stack, and when the placeholder value is reached, add the vowel from the vowel stack in reverse order in its place
// once finished, return the result string


// function reverseVowels(s) {
//     let ordered = [];
//     let vowels = "aeiouAEIOU";
//     let vowelsArr = [];
//     let result = "";
//     for(const idx of s) {
//         if(vowels.includes(idx)) {
//             vowelsArr.push(idx);
//             ordered.push(true);
//         } else {
//             ordered.push(idx);
//         };
//     };
//     for(const idx of ordered) {
//         if(idx === true) {
//             result += vowelsArr.pop();
//         } else {
//             result += idx;
//         };
//     };
//     return result;
// }


// optimized 2 pointer approach
// O(1) space, O(n) just as before

function reverseVowels(s) {
    const vowels = "aeiouAEIOU";
    const chars = s.split("");
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        while (left < right && !vowels.includes(chars[left])) {
            left++;
        }

        while (left < right && !vowels.includes(chars[right])) {
            right--;
        }

        [chars[left], chars[right]] = [chars[right], chars[left]];
        left++;
        right--;
    }

    return chars.join("");
}

console.log(reverseVowels("IceCreAm")) // "AceCreIm"
console.log(reverseVowels("leetcode")) // "leotcede"