// Remove Exclamation Marks
/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

/*
* @params {string} s
* @return {string}
*/

// var removeExclamationMarks = s => {
//     let result = "";
//     for(const letter of s){
//         if(letter !== '!'){
//             result += letter;
//         };
//     };
//     return result;
// };

// space optimization, readability optimization
var removeExclamationMarks = s => s.replaceAll("!", '')

console.log(removeExclamationMarks("Hello World!!") === "Hello World")
console.log(removeExclamationMarks("TqNpsRnffN!rrlUdqkcRW xhuKKvmklT!AXDeYbtdTH") === "TqNpsRnffNrrlUdqkcRW xhuKKvmklTAXDeYbtdTH")


// tests pass