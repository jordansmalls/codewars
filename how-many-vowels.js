//How many vowels?

// Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of. If you feel like an extra challenge, consider returning the number of characters.
// THIS IS EASY REVIEW!

const howManyVowels = str => {
    //create counter
    let counter = 0;
    // create vowels as vars
    let a =	'a';
    let e = 'e';
    let i = 'i'; 
    let o = 'o';
    let u = 'u';
    // handle casing issues
    let newStr = str.toLowerCase();
    // convert newStr into an array for future comparisons
    let strArr = newStr.split('');
    //loop through array and update counter var for every match
    for(let k = 0; k < strArr.length; k++){
        if(strArr[k] === a){
      counter += 1
      };
      if(strArr[k] === e){
      counter += 1
      };
      if(strArr[k] === i){
      counter += 1
      };
      if(strArr[k] === o){
      counter += 1
      };
      if(strArr[k] === u){
      counter += 1
      };
    }
    return counter
    };
    
    console.log(howManyVowels('Hello'))
    console.log(howManyVowels('Jordan'))
    console.log(howManyVowels('aeiou'))
    console.log(howManyVowels('You are ridiculous my friend!')) // 11