// How good are you really?
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

const betterThanAverage = (arr, score) => {
    if((arr.reduce((acc,c)=>acc+c,0) / arr.length) <= score){
      return true
    }else{
      return false
    }
  }

let test = betterThanAverage([2,3,5])
let ans = false
console.log({test,ans})

// test passes