// Small enough?

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

const smallEnough = (a, limit) => {
    let solution = true;
    for(let i = 0; i < a.length; i++){
        if(a[i] <= limit){
        }else{
          solution = false
        }
    }
    return solution
};

// ([9,0,4,0,3,2,0,5], 5) ==> false
smallEnough([9,0,4,0,3,2,0,5], 5)
// test passes