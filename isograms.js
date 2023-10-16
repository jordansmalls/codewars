// Isograms
/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

const isIsogram = str => {
    if(str.length == 0){
        return true
    };
    str = str.toUpperCase();
    let charSet = new Set();
    for(let char of str){
        if(charSet.has(char)){
            return false
        }
        charSet.add(char)
    }
    return true
}

// passes tests