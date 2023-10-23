// Balanced Number (Special Numbers Series #1)
/*
The task
Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.
More details on "Balanced" number in kata details.
*/

const balancedNum = num => {
    let numString = num.toString();
    let numLength = numString.length;
    if(numLength === 1){
        return 'Balanced';
    }else if(numLength % 2 !== 0){
        let middleIndex = Math.floor(numLength / 2);
        let leftPart = numString.substring(0, middleIndex);
        let rightPart = numString.substring(middleIndex + 1);
        let sum1 = 0;
        let sum2 = 0;
        for(let i = 0; i < leftPart.length; i++){
            sum1 += parseInt(leftPart[i]);
            sum2 += parseInt(rightPart[i]);
        }
        if(sum1 === sum2){
            return 'Balanced';
        }else{
            return 'Not Balanced';
        }
    }else if(numLength % 2 === 0){
        let middleIndex = numLength / 2 - 1;
        let middleTwoCharacters = numString.substring(middleIndex, middleIndex + 2);
        let leftPart = numString.substring(0, middleIndex);
        let rightPart = numString.substring(middleIndex + 2);
        let sum1 = 0;
        let sum2 = 0;
        for(let i = 0; i < leftPart.length; i++){
            sum1 += parseInt(leftPart[i]);
            sum2 += parseInt(rightPart[i]);
        }
        if(sum1 === sum2){
            return 'Balanced';
        }else{
            return 'Not Balanced';
        }
    }
}

// tests pass

// alternate solution

function balancedNum(number) {

    let str = `${number}`
    ,   len = (str.length - (str.length % 2 ? -1 : -2)) / 2
    ,   sum = digits => [ ...digits ].reduce((a, b) => a + +b, 0);
  
    return sum(str.slice(0, len)) === sum(str.slice(-len)) 
    ? 'Balanced' 
    : 'Not Balanced';
  
  }