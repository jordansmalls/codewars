// Valid Word
/*
A word is considered valid if:

It contains a minimum of 3 characters.
It contains only digits (0-9), and English letters (uppercase and lowercase).
It includes at least one vowel.
It includes at least one consonant.
You are given a string word.

Return true if word is valid, otherwise, return false.

Example 1:
Input: word = "234Adas", Output: true
Explanation: This word satisfies the conditions.

Example 2:
Input: word = "b3", Output: false
Explanation: The length of this word is fewer than 3, and does not have a vowel.

Example 3:
Input: word = "a3$e", Output: false
Explanation: This word contains a '$' character and does not have a consonant.

*/

/*
* @params {string} word
* @return {boolean}
*/

// input --> string: only a valid word if contains more than 3 chars, contains at least 1 vowel and 1 consonant, contains chars of digits 0-9 and letters a-z
// return --> boolean: if input is a valid word ? true : false

// check if input word has a greater length than 3 --> no? return false
// check if input word contains at least one vowel and one consonant
    // create string of vowels in both cases & consonants in both cases
    // create a vowel counter and consonant counter
    // instantiate a loop to iterate over the input string
        // vowels.includes(word[curr]) ? increment the count var
        // consonants.includes(word[curr]) ? increment the count var
    
    // if statements to ensure input has at least one vowel and one consonant

// create a copy of input word
// adjust copy with regex to include only chars 0-9a-zA-z
// return the comparison of lengths between the input string and adjusted version




const isValid = function(word){
    // check if input word has a greater length than 3
    if(word.length < 3) return false;

    // create string of vowels in both cases & consonants in both cases
    let vowels = "aeiouAEIOU";
    let consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";

    // create a vowel counter and consonant counter
    let vowelCount = 0;
    let consonantCount = 0;

    // instantiate a loop to iterate over the input string
    for(let curr = 0; curr < word.length; curr++){
        // vowels.includes(word[curr]) ? increment the count var
        if(vowels.includes(word[curr])){
            vowelCount += 1;
        };
        // consonants.includes(word[curr]) ? increment the count var
        if(consonants.includes(word[curr])){
            consonantCount += 1;
        };
    };

    // if statement to ensure input contains at least one vowel
    if(vowelCount == 0){
        return false;
    };
    // if statement to ensure input contains at least one consonant
    if(consonantCount == 0){
        return false;
    };

    // create a copy of input word
    let copy = word

    // adjust copy with regex to include only chars 0-9a-zA-z
    copy = copy.replace(/[^a-z0-9A-Z]/g,'');

    // return the comparison of lengths between the input string and adjusted version
    return word.length == copy.length;
};



var isValidConcise = word => {
    if(word.length < 3) return false;
    let copy = word.replace(/[^a-z0-9A-Z]/g,'');
    if(copy.length < word.length) return false;
    let vc = 0;
    let cc = 0;
    for(let i = 0; i < word.length; i++){
        if("aeiouAEIOU".includes(word[i])){
            vc++;
        };
        if("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ".includes(word[i])){
            cc++;
        };
    };
    if(!vc > 0) return false;
    if(!cc > 0) return false;
    return true;
};


const isValidOptimized = function(word) {
    if (word.length < 3) return false;

    let hasVowel = false;
    let hasConsonant = false;

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (/[^a-zA-Z0-9]/.test(char)) return false;
        if ("aeiouAEIOU".includes(char)) hasVowel = true;
        if ("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ".includes(char)) hasConsonant = true;
    }

    return hasVowel && hasConsonant;
};

console.log(isValid("234Adas")); // true
console.log(isValid("b3")); // false
console.log(isValid("a3$e")); // false


console.log(isValidConcise("234Adas")) // true
console.log(isValidConcise("b3")) // false
console.log(isValidConcise("a3$e")) // false

console.log(isValidOptimized("234Adas")) // true
console.log(isValidOptimized("b3")) // false
console.log(isValidOptimized("a3$e")) // false


// all tests pass