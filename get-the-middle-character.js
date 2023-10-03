// Get the Middle Character

/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/

const getMiddle = str => {
    let middle = Math.floor(str.length/2);
    return str.length % 2 === 0 ? str.slice(middle - 1, middle +1) : str.slice(middle, middle+1)
}

// tests pass