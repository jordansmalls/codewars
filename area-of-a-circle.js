// Area of a Circle

// Complete the function which will return the area of a circle with the given radius.
// Returned value is expected to be accurate up to tolerance of 0.01.
// If the radius is not positive, throw Error.


const circleArea = r => {
    if(r <= 0){
        throw Error('Error')
    }else{
       let solution = Number(((Math.PI) * (r**2)).toFixed(3))
        return solution
    }
};