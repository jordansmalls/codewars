// How good are you really?

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// Known error with test cases, you CANNOT add your value to the classPoints

const betterThanAverage = (classPoints, yourPoints) => {
    let average = classPoints.reduce((acc,c)=>acc+c,0) / classPoints.length
    if(average < yourPoints){
        return true
    }else{
        return false
    }
}