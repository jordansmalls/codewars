// String Transformer
// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

const stringTransformer = str => {
    let result = [];
    let lower = str.toLowerCase();
    let upper = str.toUpperCase();
    let arr = str.split('');
    let arrL = lower.split('');
    let arrU = upper.split('');
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] === arrU[i]){
            result.push(arrL[i])
        }else{
            result.push(arrU[i])
        }
    }
    let ans = result.join('');
    let ans1 = ans.split(' ').reverse().join(' ')
    return ans1
}

// test cases pass



// alternate solution

function stringTransformer(str) {
    return str
      .split(' ')
      .reverse()
      .join(' ')
      .split('')
      .map(v => v == v.toUpperCase() ?
        v.toLowerCase() :
        v.toUpperCase())
      .join('');
  }


// when prompted, chatGPT could not generate code that implemented a solution properly using javascript!