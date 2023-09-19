// Reduce but Grow


// Given a non-empty array of integers, return the result of multiplying the values together in order. 


const grow = array => array.reduce((acc,c) => acc * c, 1)

//test cases pass