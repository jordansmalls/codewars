// Power of 4

// Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

const powerOf4 = n => {
    if (typeof n !== 'number' || n <= 0 || n % 1 !== 0) {
        return false;
    }
    let result = 1;
    while (result < n) {
        result *= 4;
    }
    return result === n;
};

powerOf4(1024) // true
powerOf4(44) // false
powerOf4('not a positive ineger') // returns false
