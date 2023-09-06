// Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

const squareSum = n => {
    let sqArr = [];
    for(let i = 0; i < n.length; i++){
        sqArr.push(n[i] * n[i])
    }
    return sqArr.reduce((acc,c)=>acc + c, 0)
};