// Check same case

/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
*/
const sameCase = (a, b) => {
    if (!/^[a-zA-Z]$/.test(a) || !/^[a-zA-Z]$/.test(b)) {
      return -1;
    }
    if ((a === a.toUpperCase() && b === b.toUpperCase()) || (a === a.toLowerCase() && b === b.toLowerCase())) {
      return 1;
    } else {
      return 0;
    }
  };

// tests pass