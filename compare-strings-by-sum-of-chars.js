// Compare Strings by Sum of Chars
/*
Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.
*/

function compare(s1, s2) {
    var sum1 = 0, sum2 = 0;
    if (s1 !== null && s1 !== "") {
      for (var i = 0; i < s1.length; i++) {
        if (s1.toUpperCase().charCodeAt(i)<65 || s1.toUpperCase().charCodeAt(i)>90){
          sum1 = 0;
          break;
        };
        sum1 += s1.toUpperCase().charCodeAt(i);
      };
    
    };
    if (s2 !== null && s2 !== "") {
      for (var i = 0; i < s2.length; i++) {
        if (s2.toUpperCase().charCodeAt(i)<65 || s2.toUpperCase().charCodeAt(i)>90){
          sum2 = 0;
          break;
        };
        sum2 += s2.toUpperCase().charCodeAt(i);
      };
    };
    
    
    return sum1==sum2;
    }