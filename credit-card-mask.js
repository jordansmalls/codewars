// Credit Card Mask
/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct.
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"

*/

// function maskify1(cc){
//     // edge cases where str.length < 4\
//     if(cc.length < 4) return cc;
//     // var for last 4 chars
//     let lastFourChars = '';
//     // var for result str
//     let result = '';
//     // for loop init: saving last 4 chars of CC str
//     for(let i = cc.length -1; i >= cc.length - 4 ; i--){
//         lastFourChars += cc[i];
//     };
//     for(let i = 0; i < cc.length - 4; i++){
//         result += '#';
//     };
//     // add lastFourChars to result & return
//     result = result + lastFourChars.split('').reverse().join('');
//     return result;
// };


const maskify = cc => {
    if(cc.length < 4) return cc;
    let lastFourChars = '';
    let result = '';
    for(let i = 0; i < cc.length - 4; i++){
        result += '#';
    };
    for(let i = cc.length - 1; i >= cc.length - 4; i--){
        lastFourChars += cc[i];
    };
    result = result + lastFourChars.split('').reverse().join('');
    return result;
};


const x = "4556364607935616" // "############5616"
console.log(maskify(x) === "############5616") // true
