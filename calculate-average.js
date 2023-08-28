// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

const findAverage = arr => {
    if(arr.legnth === 0){
        return 0;
    }
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    let ans;
    ans = (sum / arr.length)
    return ans
};
