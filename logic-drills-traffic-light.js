// Logic Drill - Traffic Light
/*
You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/

// @params {string} current
// @return {string}

// receiving arguments of current state of the traffic light
// return what the next step aka "color" of the light should be

// red --> green
// yellow --> red
// green --> yellow

// if statements: if input == "green" return "yellow" elif input == "red" return "green" elif input == "yellow" return "red"
// "Green" or "grEEn" or "green" --> letter casing? assume all inputs will be lower cased, no funny business.

// function updateLight(current) {
//     if(current == "green"){
//         // green --> yellow
//         return "yellow";
//     }else if(current == "red"){
//         // red --> green
//         return "green";
//     }else if(current == "yellow"){
//         // yellow --> red
//         return "red";
//     };
// };

// simplified
// var updateLight = str => {
//     if(str == "green") return "yellow"
//     else if(str == "yellow") return "red"
//     else if(str == "red") return "green"
// }


// one line solution
var updateLight = curr => curr === 'yellow' ? 'red' : curr === 'green' ? 'yellow' : 'green';
  
  
// examples
console.log(updateLight("yellow")) // red
console.log(updateLight("green")) // yellow
console.log(updateLight("red")) // green