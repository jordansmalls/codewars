/* 
Very Even Numbers

Write a function that returns true if the number is a "Very Even" number.
If a number is a single digit, then it is simply "Very Even" if it itself is even. If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".
*/

const isVeryEvenNumber = num => {
    if(num < 10 && num % 2 === 0){
        return true
    };
    if(n > 9){
        return isVeryEvenNumber(String(num).split('').reduce((acc,c)=>+acc+ +c,0))
    }else{
        return false
    }
}