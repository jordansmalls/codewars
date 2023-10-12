// Counting Duplicates 
/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/
const duplicateCount = text => {
    text = text.toLowerCase();
    const charCount = {};
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (/^[a-z0-9]$/.test(char)) {
            if (charCount[char]) {
                charCount[char] += 1;
                if (charCount[char] === 2) {
                    count += 1;
                }
            } else {
                charCount[char] = 1;
            }
        }
    }
    return count;
}

// pass