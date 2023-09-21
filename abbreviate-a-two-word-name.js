// Abbreviate a Two Word Name


// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


const abbrevName = name => {
    let arr = name.toUpperCase().split(' ')
    let nameArr1 = arr[0].split('')
    let nameArr2 = arr[arr.length -  1].split('')
    return (`${nameArr1[0]}.${nameArr2[0]}`)
}

// tests pass 