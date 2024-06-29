// Arguments to Binary addition
/*
Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.
If your language can handle float binaries assume the array won't contain float or doubles.

NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
*/

/* ignoring NaN vals
var arr2bin = function(array){
  var sum = 0;
  array.forEach(index => {
    if(index === NaN){
      index = 0;
    }
    else if(typeof index === typeof sum){
      sum += index
    }
  });
  return sum.toString(2)
}
*/

var arr2bin = arr => arr.reduce((acc,c)=> typeof(c) === 'number' ? acc + c : acc, 0).toString(2)

console.log(arr2bin([1,2])) // == '11'
console.log(arr2bin([1,2,'a'])) //  == '11'
console.log(arr2bin([])) // == '0'
