// List Filtering
/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/


//@params {array[]} arr
//@return {array[]}
// input -> list/array of non negative integers and strings
// return -> list/array containing the same integers with the strings filtered out

// instantiate an array to contain the "filtered values"
// iterate over the array/list, check typeof for curr value, if typeof !== string, push to new array/list else ignore curr value
// return array with "filtered values"

// function filter_list(arr) {
//     // instantiate an array to contain the "filtered values"
//     var filteredArr = [];
//     // create pointer to iterate over arr
//     var pointer = 0;
//     // iterate over the array/list, check typeof for curr value, if typeof !== string, push to new array/list else ignore curr value
//     while(pointer < arr.length){
//         // if the curr value is not equal to value & type to a string
//         if(typeof arr[pointer] !== typeof "hello"){
//             // add non neg integer into filteredArr
//             filteredArr.push(arr[pointer]);
//         }
//         // increment pointer
//         pointer++;
//     };
//     // return array with "filtered values"
//     return filteredArr;
//   };

// more concise solution, using built-in filter array method
var filter_list = arr => arr.filter(curr => typeof curr !== 'string'); 


console.log(filter_list([1,2,'a','b'])) // [1,2]
console.log(filter_list([1,'a','b',0,15])) // [1, 0, 15]
console.log(filter_list([1,2,'aasf','1','123',123])) // [1, 2, 123]