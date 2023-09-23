// Count of Positives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array

const countPositivesSumNegatives = x => {
    if(x === null || x.length == 0){
        return []
    }else{
        let neg = 0;
        let pos = 0;
        for(let i = 0; i < x.length; i++){
            if(x[i] > 0){
                pos += 1
            }else if(x[i] < 0 && x[i] !== 0){
                neg += x[i]
            }
        }
        return [pos, neg]
    }
}

// test pass


// alt solution

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}