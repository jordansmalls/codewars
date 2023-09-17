// Even or Odd

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const evenOrOdd = n => {
    if(n % 2 === 0){
        return 'Even'
    }else{
        return 'Odd'
    }
};


// refactored
const evenOrOdd = n => n % 2 === 0 ? 'Even' : 'Odd'
