// Persistent Bugger
/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
*/

/*
For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
*/

/*
* @params {integer} num
* @return {integer}
*/

/*
FUNCTION persistence(num)
    SET curr TO 0

    WHILE num is greater than 9
        CONVERT num to a string
        SPLIT the string into individual characters (digits)
        CONVERT each character back to a number
        MULTIPLY all the digits together to get a new number
        ASSIGN the result back to num
        INCREMENT curr by 1

    END WHILE

    RETURN curr
END FUNCTION
*/


const persistence = function(num){
    for(var curr = 0; num > 9; curr++){
        num = num.toString().split('').reduce((t,c) => c * t);
    };
    return curr
 }
