// Contains Duplicates
/*
Given an integer array, nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/
// @param --> array
// @return --> boolean

/*
var containsDuplicate = function(array){
  var temp = 0;
  for(let i = 0; i < array.length; i++){
    if(array.indexOf(array[i]) !== array.lastIndexOf(array[i])){
      temp++
    }
  }
  if(temp == 0) return false
  else return true
}
*/

var containsDuplicate = function(array){
  return new Set(array).size !== array.length;
}


console.log(containsDuplicate([1,2,3,1])) // true
console.log(containsDuplicate([1,2,3,4])) // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])) // true

// tests pass