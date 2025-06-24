// Vowel Count
// Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.

// input => string containing lowercase chars + spaces
// return => total of vowels present in the string

// create a string of vowels to compare against
// create a map to store the vowels and their counts
// iterate over input string
    // if the char is a vowel, (if the map has the curr char) increment the count
// iterate over the map and find the total count of vowels && return it


// alternately, use regex to find all vowels in the string and return the length of the arr

const getCount = string => {
    let map = new Map()
    let vowels = "aeiou"

    for(const idx of vowels) {
       map.set(idx, 0)
    }

    for(const idx of string) {
        if(map.has(idx)) {
            map.set(idx, map.get(idx) + 1)
        }
    }

    let total = 0
    for(const idx of map.values()) {
        total += idx
    }

    return total
}

const getCountAgain = string => (string.match(/[aeiou]/gi) || []).length


console.log(getCount("hello world")) // 3
console.log(getCountAgain("hello world")) // 3
console.log(getCount("xyz")) // 0
console.log(getCountAgain("xyz")) // 0
