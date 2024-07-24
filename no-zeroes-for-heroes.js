// No zeros for heros
/*
Numbers ending with zeros are boring. They might be fun in your world, but not here. Get rid of them. Only the ending ones.

1450 --> 145
9600000 --> 96
1050 --> 105
-1050 --> -105
*/

var noBoringZeros = n => {
    while(n % 10 === 0 && n !== 0){
        n = n / 10;
    }
    return n;
}

console.log(noBoringZeros(1450) === 145 ) // true
console.log(noBoringZeros(9600000) === 96) // true
console.log(noBoringZeros(1050) === 105) // true
console.log(noBoringZeros(-1050) === -105) // true