//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
//Stop spinning my words


function spinWords(string){
  let arr = string.split(" ");
  let res = arr.map((word) => {
    if(word.length >= 5) {
      return word.split("").reverse().join("");
    } else {
      return word;
    };
  });
  return res.join(" ");
};

// all tests pass
