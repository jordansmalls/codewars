// Binary Addition
/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

/*
* @params {number, number} n1,n2
* @return {string}
*/

// input --> number,number: two numbers
// return --> string: the sum of the two inputs in binary as a string

// create the sum of n1 & n2
// apply toString() method with radix of 2, to get value in binary && convert to string in same operation
// return binary result

function addBinaryWithPseudocode(n1,n2){
    // create the sum of n1 & n2
    let sum = n1 + n2;
    // apply toString() method with radix of 2, to get value in binary && convert to string in same operation
    let result = sum.toString(2);
    // return binary result
    return result;
}

// concise version I would use:
const addBinary = (n1,n2) => (n1 + n2).toString(2)

// time complexity: O(1)


console.log(addBinary(1,1)) // 10 pass
console.log(addBinary(5,9)) // 1110 pass

