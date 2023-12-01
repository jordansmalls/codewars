// Double Char
/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/

const doubleChar = str => {
    let arr = str.split('')
    let res = []
    for(let i = 0; i < arr.length; i++){
      res.push(arr[i])
      res.push(arr[i])
    }
    return res.join('')
  }

  
console.log(doubleChar('String'), "SSttrriinngg")
console.log(doubleChar('Hello World'), "HHeelllloo  WWoorrlldd")
console.log(doubleChar("1234!_ "), "11223344!!__  ")
console.log(doubleChar('jordan'), 'jjoorrddaann')


// refactored

const doubleCharAgain = str => str.split('').map(char => char + char).join('');
