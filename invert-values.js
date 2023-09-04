// Invert values

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.


const invert = array => {
    let newArray = array.splice([])
    for(let i = 0; i < newArray.length; i++){
        if(newArray[i] < 0 || newArray[i] > 0){
            newArray[i] *= -1
        }
    }
    return newArray
};