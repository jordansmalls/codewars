// Alternate capitalization
/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

const capitalize = str => {
    let result1 = [];
    let result2 = [];
    let arr = str.split('')
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            result1.push(arr[i].toUpperCase())
        }else{
            result1.push(arr[i])
        }
    };
    for(let j = 0; j < arr.length; j++){
        if(j % 2 == 0){
            result2.push(arr[j])
        }else{
            result2.push(arr[j].toUpperCase())
        }
    }
    return [result1.join(''), result2.join('')]
}


// tests pass

function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };

  


