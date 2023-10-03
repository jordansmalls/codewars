// Descending Order

/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/

const descendingOrder = n => {
    let nums = Array.from(n.toString())
    let res = nums.slice(0)
    res = res.sort((a,b)=>b-a)
    return +res.join('')
}

// test cases pass