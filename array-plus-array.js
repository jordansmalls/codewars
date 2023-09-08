// Array plus Array

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

const arrayPlusArray = (a1, a2) => {
    return a1.reduce((acc,c)=>acc + c, 0) + a2.reduce((acc,c)=>acc + c, 0)
}