// All Star Code Challenge #18

// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one. If no occurrences can be found, a count of 0 should be returned.


const strCount = (s, letter) => {
    let ans = 0;
    let sArr = s.split('');
    for(let i = 0; i < s.length; i++){
        if(sArr[i] === letter){
            ans += 1
        }
    }
    return ans
}