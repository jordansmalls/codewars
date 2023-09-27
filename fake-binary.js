// Fake Binary

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

const fakeBin = x => {
    let newStr = '';
    for(let i = 0; i <= x.length; i++){
        if(x.split('')[i] < 5){
            newStr += '0'
        }else if(x.split('')[i] >= 5){
            newStr += '1'
        }
    }
    return newStr
}


// 

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}


// 


const fakeBinTwo = x => {
    let arr = x.split('');
    let res = [];
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] < 5){
            res.push('0')
        }else if(arr[i] == 5 || arr[i] > 5){
            res.push('1')
        }
    }
    let result = res.join('')
    return result
}
