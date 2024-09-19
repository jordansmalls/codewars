// Merge Strings Alternately
/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.


Example 1:
Input: word1 = "abc", word2 = "pqr", Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:
Input: word1 = "ab", word2 = "pqrs", Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Example 3: 
Input: word1 = "abcd", word2 = "pq", Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
*/


/*
* @params {string} word1
* @params {string} word2
* @return {string}
*/


function mergeAlternately(word1: string, word2: string): string{
    let length: number = 0;
    if(word1.length > word2.length){
        length = word1.length;
    }else{
        length = word2.length;
    };
    let arr: Array<string> = new Array();
    for(let curr = 0; curr < length; curr++){
        arr.push(word1[curr], word2[curr]);
    };
    arr.forEach(index => {
        if(index == undefined){
            index = "$";
        };
    });
    let string: string = arr.join('');
    string = string.replace(/[^a-z]/g,'');
    return string;
}