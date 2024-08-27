// Find the Next Perfect Square
/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

*/

/*
* @params {integer} n
* @return {integer}
*/

const findNextSquare = function(n){
    var root = Math.sqrt(n);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}

// passes tests
