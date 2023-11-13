// Remove duplicate words
/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
*/

const removeDuplicateWords = str => {
    let temp = new Set();
    let arr = str.split(' ')
    for(let i = 0; i < arr.length; i++){
        if(arr.indexOf(i) === arr.lastIndexOf(i)){
            temp.add(arr[i])
        }
    }
    return Array.from(temp).join(' ')
}


let test = removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')
let ans = 'alpha beta gamma delta'

console.log({test, ans})

// tests pass

// alt solution

const removeDuplicateWordsAgain = s => [...new Set(s.split(' '))].join(' ')