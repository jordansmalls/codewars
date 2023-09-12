// Power of Two

// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

const isPowerOfTwo = num => {
    if(num == 1){
        return true
    };
    if(num < 1){
        return false
    };
    return isPowerOfTwo(num/2)
}