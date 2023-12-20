// Jaden Casing Strings
/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

/*
String.prototype.toJadenCase = function(){
    let str = this;
    str = str.toLowerCase();
    let temp = str.split(' ');
    for(let i = 0; i < temp.length; i++){
        temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].slice(1)
    };
    return temp.join(' ');
};
*/

String.prototype.toJadenCase = function(){
    return this.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ');
};

let test1 = 'attack on titan is a masterpiece.';
let test2 = "dOn'T lEt Me LeAvE MuRpH! No!"
console.log(test1.toJadenCase(),"Attack On Titan Is A Masterpiece.")
console.log(test2.toJadenCase(),"Don't Let Me Leave Murph! No!")

// test cases for both functions pass
