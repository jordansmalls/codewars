// A Needle in the Haystack

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

const findNeedle = haystack => {
    let pos;
      for(let i = 0; i < haystack.length; i++){
          if(haystack[i] === 'needle'){
            pos = haystack.indexOf('needle')
          }
      }
      return 'found the needle at position ' + pos
  }

  // refactor
  
  const findNeedleAgain = haystack => 'found the needle at position ' + haystack.indexOf('needle')