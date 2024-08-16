// Return the Missing Element
/*
Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

*/

// create copy of input arr
// sort copy of input arr

// instantiate an array
// create a for loop, 0-9, push those ints into new array
// iterate over input arr
    // if input[i] !== temp[i]
        // return temp[i] <-- our "missing" num


// @params {array[]} array
// @return {integer}

/*
var getMissingElement = function(array){
    // create copy of input arr &&  sort copy of input arr
    var copy = array.slice().sort();
    // instantiate an array
    var temp = [];
    // create a for loop, 0-9, push those ints into new array
    for(let i = 0; i <= 9; i++){
        temp.push(i)
    };
    // iterate over sorted input arr
    for(let curr = 0; curr < copy.length; curr++){
        // if input[i] !== temp[i]
        if(copy[curr] !== temp[curr]){
            // return temp[i] <-- our "missing" num
            return temp[curr];
        };
    };
};
*/

var getMissingElement = arr => {
    arr = arr.sort();
    var temp = [0,1,2,3,4,5,6,7,8,9];
    for(let curr = 0; curr < arr.length; curr++){
        if(arr[curr] !== temp[curr]){
            return temp[curr]
        }
    }
}
 

// short hand
function getMissingElement(arr){
    for(let i=0;i<10;i++)
      if(!arr.includes(i)) return i;
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])) // 8
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1] )) // 3
