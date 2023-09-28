// Count the divisors of a number

/*
Count the number of divisors of a positive integer n.
Random tests go up to n = 500000.
*/

const getDivisorsCnt = n => {
    let counter = 0;
    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            counter++
        }
    }
    return counter
};

// 

function getDivisorsCnt(n){
    var num=0;
    if(n==1) return 1;
    if(n%Math.sqrt(n)==0) num++;
    for(var i=1;i<Math.sqrt(n);i++){
        if(n%i==0){
            num+=2;
        }
    }
    return num;
}
