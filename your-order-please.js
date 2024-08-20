// Your Order Please
/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

*/


// @params {string} words
// @return {string}

// input --> string: string of words containing letters and a number
// return --> string: sorted string, where the numbers amongst the words dictate the order of their occurene in the string

// if the input string is empty, return an empty string
// the words in the string will only contain valid consecutive numbers
// numbers can be from 1-9
// always will be broken up by single spaces

// base check of if the string is empty
// create an array from the input string, using the split method and a delim of " " (space)
// create an array to store solution
// ["aa1", "fs9", "af3", ... ]
// instantiate a loop to iterate over the array
    // - instantiate a nested loop to iterate over the characters in the curr index of the arr
        // -- write a long series of if else if cases:
            // --- if '1'.includes(array[curr][i]): res[0] = arr[curr] (the first index is set to the value of the entire curr word)
                // ---- continue checks for nums 2-9
// return the res arr joined back into a string with same single space delim " "

const order = words => {
    if(words.length < 1) return "";
    var arr = words.split(" ");
    var res = [];
    for(let curr = 0; curr < arr.length; curr++){
        for(let i = 0; i < arr[curr].length; i++){
            if('1'.includes(arr[curr][i])){
                res[0] = arr[curr]
            }else if('2'.includes(arr[curr][i])){
                res[1] = arr[curr]
            }else if('3'.includes(arr[curr][i])){
                res[2] = arr[curr]
            }else if('4'.includes(arr[curr][i])){
                res[3] = arr[curr]
            }else if('5'.includes(arr[curr][i])){
                res[4] = arr[curr]
            }else if('6'.includes(arr[curr][i])){
                res[5] = arr[curr]
            }else if('7'.includes(arr[curr][i])){
                res[6] = arr[curr]
            }else if('8'.includes(arr[curr][i])){
                res[7] = arr[curr]
            }else if('9'.includes(arr[curr][i])){
                res[8] = arr[curr]
            }
        }
    }
    return res.join(" ");
}
// time complexity O(n * m)




// more optimal time complexity 
const orderAgain = words => {
    if (words.length < 1) return "";
    return words.split(" ").sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(" ");
}
//tc: O(n log n)

console.log(order("is2 Thi1s T4est 3a") === "Thi1s is2 3a T4est") // true
console.log(orderAgain("is2 Thi1s T4est 3a") === "Thi1s is2 3a T4est") // true

// tests pass

