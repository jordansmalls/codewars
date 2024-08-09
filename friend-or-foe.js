// Friend or Foe
/*
Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

Input = ["Peter", "Stephen", "Joe"]
Output = []
Input strings will only contain letters. Note: keep the original order of the names in the output.
*/

// @params {array[]} arr
// @return {array[]}

// input -> array of strings
// return -> array of strings with only lengths of 4

// input strings will only contain letters, no funny business
// iterate over the array
// if curr index.length === 4, push to new arr else do nothing
// return new arr


// function friend(arr){
//     var result = [];
//     var pointer = 0;
//     while(pointer < arr.length){
//         if(arr[pointer].length === 4){
//             result.push(arr[pointer]);
//         };
//         pointer++;
//     }
//     return result;
// };

var friend = arr => arr.filter(index => index.length === 4)




console.log(friend(["Ryan", "Kieran", "Jason", "Yous"])) // ["Ryan", "Yous"]
console.log(friend(["Peter", "Stephen", "Joe"])) // []