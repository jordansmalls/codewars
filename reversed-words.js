// Reversed Words

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

const reversedWords = str => {
    let arr = str.split(' ')
    return arr.reverse().join(' ')
}

// test pass