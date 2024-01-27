// CSV Representation of Array
/*
Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]]

output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'

Array's length > 2.
More details here: https://en.wikipedia.org/wiki/Comma-separated_values
Note: you shouldn't escape the \n, it should work as a new line.
*/

const toCsvText = arr => {
    if (arr.length < 2) return Error;
    return arr.join('\n')
}

const test =
    [[0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]];

const ans =
    '0,1,2,3,4\n'
    + '10,11,12,13,14\n'
    + '20,21,22,23,24\n'
    + '30,31,32,33,34';

console.log(toCsvText(test) === ans); // true -> tests pass
