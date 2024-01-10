// Well of Ideas - Easy Version
/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

// function well(array){
//   let count = 0;
//   array.forEach(kata => {
//     if(kata == 'good'){
//       count++
//     }
//   });
//   if(count == 1 || count == 2){
//     return 'Publish!'
//   }else if(count > 2){
//     return 'I smell a series!'
//   }else{
//     return 'Fail!'
//   }
// }

// alt solution
const well = x => {
  const goodCount = x.filter(x => x == 'good').length;
  return goodCount < 1 ? 'Fail!' : 
         goodCount < 3 ? 'Publish!' : 'I smell a series!';
}

console.log(well(['bad', 'bad', 'bad']), 'Fail!') // pass
console.log(well(['good', 'good', 'good', 'bad']), 'I smell a series!') // pass