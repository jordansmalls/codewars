// Numbers in strings

// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.
let test = "gh12cdy695m1";


const solve = str => Math.max(...str.match(/\d+/g));


solve(test) // 695

// test passes











