// Camel Casing
/*
Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
*/

String.prototype.camelCase = function(){
    return this.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join('')
}


console.log('camel case word'.camelCase(), 'CamelCaseWord')
console.log('JAy iS A gReAT pRoGrAmmER'.camelCase(), 'JayIsAGreatProgrammer')

// test cases pass


// alt solution
String.prototype.camelCase = function () {
    return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
  }
  