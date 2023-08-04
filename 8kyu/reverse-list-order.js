//? Reverse List Order
//? In this kata you will create a function that takes in a list and returns a list with the reverse order.

function reverseList(list) {
  let reversedList;
  reversedList = list.reverse()
  return reversedList
}

const test1 = [1, 2, 3, 4]
console.log(reverseList(test1)); //!  [4, 3, 2, 1] test passes
const test2 = [9, 2, 0, 7]  
console.log(reverseList(test2)); //!  [7, 0, 2, 9] test passes
