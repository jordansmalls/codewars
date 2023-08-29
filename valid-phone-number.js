// Valid Phone Number

// Write a function that accepts a string, and returns true if it is in the form of a phone number.
// Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

// Only worry about the following format:
// (123) 456-7890 (don't forget the space after the close parentheses)

// Example:

// "(123) 456-7890"  => true


//TODO: Return whether phoneNumber is in the proper form

const validPhoneNumber = str => {
    if (str.length !== 14) {
      return false;
    }
    if (str[4] !== ")") {
      return false;
    }
    if (str[5] !== " ") {
      return false;
    }
    if (str[9] !== "-") {
      return false;
    } else {
      return true;
    }
  };