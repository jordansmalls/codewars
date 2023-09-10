// Sort Numbers

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

const solution = nums => {
    if(nums === null){
        return [];
    }else if(nums.length === 0){
        return [];
    }else{
        return nums.sort((a,b)=>a-b)
    }
};