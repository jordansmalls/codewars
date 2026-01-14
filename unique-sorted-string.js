// Unique sorted string
// Take 2 strings, s1 and s2, including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.


// input => s1 and s2, strings contianing only letters from a-z
// output => sorted string, containing only unique characters coming from both s1 and s2

// create a set (removing duplicate characters), spread set values across an array, sort the array join it and return the new string

const longest = (s1, s2) => [...(new Set(s1+s2))].sort().join("")