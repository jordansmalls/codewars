// Square(n) Sum
//TODO Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 

function squareSum(numbers){
    let result = 0;
    for (let i = 0; i < numbers.length; i++){
        result += (numbers[i] * numbers[i])
    }
    return result
};


// refactored solution --> preferred
function squareSum(numbers){
    return numbers.reduce((sum,num) => sum + (num * num), 0);
};



testNums = [1,2,2];

let test1 = squareSum(testNums);
let test2 = squareSum2(testNums);

// both test variables are set to 9 --> tests pass
