// String repeat

/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
*/

const repeatStr = (n, s) => {
    let res = ''
    for(let i = 1; i <= n; i++){
        res += s
    }
    return res
}

// tests pass

// alt solution- simply use the repeat method

const repeatStrTwo = (n,s) => s.repeat(n)

