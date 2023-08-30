// Remove the minimum

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.



const removeSmallest = (n) => {
    if(n.length < 1){
       return []
     };  
    const copy = n.slice()
    let smallestVal = n.indexOf(Math.min(...n))
    copy.splice(smallestVal, 1);
    return copy
   }