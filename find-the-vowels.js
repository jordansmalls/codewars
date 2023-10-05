// Find the vowels

/*

*/

const vowelIndices = word => {
    const vowels = "aeiouyAEIOUY";
    const vowelIndices = [];
  
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        vowelIndices.push(i + 1); // Adding 1 to make it 1-indexed
      }
    }
  
    return vowelIndices;
  }

let test = 'Super'

vowelIndices(test) // [2,4] test passes