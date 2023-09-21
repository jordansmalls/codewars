// Count Odd Numbers below n

// Given a number n, return the number of positive odd numbers below n, EASY!

// Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!

const oddCount = n => {
    let odds = [];
    for(let i = 0; i < n; i++){
        if(i % 2 !== 0){
            odds.push(i)
        }
    }
    return odds.length
}


// alt solution

const oddCount2 = n => {
    let count = 0
    for(let i = 0; i < n; i++){
        if(i % 2 !== 0){
            count += 1
        }
    }
    return count
}

// optimized alt solution

const oddCount3 = n => parseInt(n/2);


// optimized alt solution

const oddCount4 = n => Math.floor(n/2)