// Reversed Sequence
/*
Build a function that returns an array of integers from n to 1 where n > 0.
Ex: n = 5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
    if(n == 1) return [1];
    let result = [];
    for(let i = 1; i<=n;i++){
        result.push(i)
    }
    let ans = result.sort((a,b)=>b-a);
    return ans
}

// tests pass

// alternate solution

const reverseSeqTwo = n => Array.from({ length: n }, (_, i) => n - i);
