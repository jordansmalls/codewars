// Exes and Ohs
/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

const XO = str => {
    let countX = 0
    let countO = 0;
    let loop = str.toLowerCase().split('').map(char =>{
        if(char === 'x'){
            countX++
        }else if(char === 'o'){
            countO++
        }
    });
    loop
    if(countX === countO){
        return true
    }else{
        return false
    }
}

console.log(XO("ooxx"),'--->',true)
console.log(XO("xooxx"),'--->',false)


// refactored

const XOagain = str => {
    const count = str.toLowerCase().split('').reduce((acc, char) => {
        if (char === 'x') acc.x++;
        if (char === 'o') acc.o++;
        return acc;
    }, { x: 0, o: 0 });

    return count.x === count.o;
}
