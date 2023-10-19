// Triple Trouble
/*
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
Note: You can expect all of the inputs to be the same length.
*/

// const tripleTrouble = (str1, str2, str3) => {
//     let arr = [];
//     let length = 0;
//     if(str1.length > str2.length && str1.length > str3.length){
//         length += str1.length
//     }else if(str2.length > str1.length && str2.length > str3.length){
//         length += str2.length
//     }else{
//         length += str3.length
//     }
//     for(let i = 0; i <= length; i++){
//         arr.push(str1[i])
//         arr.push(str2[i])
//         arr.push(str3[i])
//     }
//     let ans = arr.join('')
//     return ans
// }

// ref
const tripleTrouble = (str1, str2, str3) => {
    const length = Math.max(str1.length, str2.length, str3.length);
    const arr = Array.from({ length }, (_, i) => str1[i] + str2[i] + str3[i]);
    return arr.join('');
  };
  