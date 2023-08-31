// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

const digitize = n => {
    let ns = n.toString();
    ns = ns.split('').reverse().join('');
    let ans = ns.split('').map(Number);
    return ans;
  };
  
  // tests pass