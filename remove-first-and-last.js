// Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const removeChar = str => {
    let arr = str.split('')
    arr.shift()
    arr.pop()
    return arr.join('')
}

console.log(removeChar('Hey'), 'e')
console.log(removeChar('Jordan'), 'orda')

// tests pass