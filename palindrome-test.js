// Palindrome Test
/*
Welcome to the Palindrome Test Challenge! This coding challenge aims to test your ability to create a function that determines whether a given string is a palindrome or not. Palindromes are sequences of characters that read the same forwards and backwards when ignoring spaces, punctuation, and capitalization. For instance, "racecar" and "A man, a plan, a canal, Panama!" are palindromes because they read the same way even when spaces and punctuation are disregarded.

Your task is to design a function, isPalindrome(str), that takes in a string (str) and returns true if it is a palindrome and false otherwise. The function should ignore spaces, punctuation marks, and treat uppercase and lowercase letters as identical.
*/

String.prototype.isPalindrome = function(){
    let rev = this.split('').reverse().join('').toLowerCase();
    if(rev === this.toLowerCase())return true
    else return false;
}
console.log('racecar'.isPalindrome(), true);
console.log('Jordan'.isPalindrome(), false);
console.log('dad'.isPalindrome(), true)
console.log('Interstellar'.isPalindrome(), false)

// test cases pass