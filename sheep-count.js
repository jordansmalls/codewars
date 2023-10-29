// Counting Sheep....
/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
*/

const countSheeps = array => {
    let count = 0;
    array.map(sS => sS === true ? count++ : console.log('nope'))
    return count
  }

  //tests pass
  // alt solutions

  const countSheepsTwo = (array) => {
    let count = 0;
    for (const sS of array) {
      if (sS === true) {
        count++;
      }
    }
    return count;
  }
  


 

