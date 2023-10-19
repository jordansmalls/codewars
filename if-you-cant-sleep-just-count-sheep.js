// If  you can't sleep, just count sheep
/*
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
const countSheep = n => {
    let res = [];
    for(let i = 1; i <= n; i++){
        if(i > 0){
            res.push(`${i} sheep...`)
        }
    }
    return res.join('')
}
// tests pass

// alternate solution

var countSheep2 = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
  }