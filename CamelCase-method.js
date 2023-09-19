// CamelCase Method

// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

/* Examples

"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
*/

  const camelCase = str => {
    let result = [];
    str = str.toLowerCase();
    let array = str.split(' ');
    for(let i = 0; i < array.length; i++){
      let temp = array[i].split('');
      temp[0] = temp[0].toUpperCase();
      result.push(temp.join(''));
    }
    let ans = result.join('')
    return ans
}

 // format solution needed

  String.prototype.camelCase=function(){
    return this.split(' ').map(function(word){
     return word.charAt(0).toUpperCase() + word.slice(1);
   }).join('');
 }