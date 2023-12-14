// Num of Vowels in String
/*
Create a string prototype method, that reverses the order of characters in a string. The method does NOT need to be case sensitive.
*/

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}


let test = 'Interstellar'
console.log(test.reverse(), 'ralletsretnI')

// pass