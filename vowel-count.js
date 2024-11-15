// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

/*
const getCount = (str) => {
    let vc = 0;
    let strArr = [];
    strArr = str.split('')
    for(let i = 0; i < strArr.length; i++){
      if(strArr[i] === 'a'){
        vc += 1
      }
      if(strArr[i] === 'e'){
          vc += 1
        }
      if(strArr[i] === 'i'){
        vc += 1
      }
      if(strArr[i] === 'o'){
        vc += 1
      }
      if(strArr[i] === 'u'){
        vc += 1
      }
    }
    return vc
  };
*/

  // const getCountAgain = string => {
  //   var count = 0;
  //   for(let curr = 0; curr < string.length; curr++){
  //     if('aeiou'.includes(string[curr])){
  //       count++;
  //     };
  //   };
  //   return count;
  // };

  /**
   * @param {string} string
   * @return {number}
   */

  const getCount = string => {
    string = string.toLowerCase();
    let vowels = new Set(["a","e","i","o","u"]);
    let count = 0;
    for(let curr = 0; curr < string.length; curr++){
      if(vowels.has(string[curr])){
        count += 1;
      };
    };
    return count;
  };

//   const getCount = string => {
//     string = string.toLowerCase();
//     const vowels = new Set(["a", "e", "i", "o", "u"]);
//     let totalVowels = 0;

//     for (let curr = 0; curr < string.length; curr += 1) {
//         if (vowels.has(string[curr])) {
//             totalVowels += 1;
//         }
//     }

//     return totalVowels;
// };


  console.log(getCount("aeiou")) // 5