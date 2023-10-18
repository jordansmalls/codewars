// Never visit a ....!?
/*
Subtract the sum
NOTE! This kata can be more difficult than regular 8-kyu katas (lets say 7 or 6 kyu)
Complete the function which get an input number n such that n >= 10 and n < 10000, then:

Sum all the digits of n.
Subtract the sum from n, and it is your new n.
If the new n is in the list below return the associated fruit, otherwise return back to task 1.
Example
n = 325
sum = 3+2+5 = 10
n = 325-10 = 315 (not in the list)
sum = 3+1+5 = 9
n = 315-9 = 306 (not in the list)
sum = 3+0+6 = 9
n =306-9 = 297 (not in the list)
.
.
.
...until you find the first n in the list below.

There is no preloaded code to help you. This is not about coding skills; think before you code

*/

const SubtractSum = n => {
    const list = [
        'empty',
        'kiwi',
        'pear',
        'kiwi',
        'banana',
        'melon',
        'banana',
        'melon',
        'pineapple',
        'apple',
        'pineapple',
        'cucumber',
        'pineapple',
        'cucumber',
        'orange',
        'grape',
        'orange',
        'grape',
        'apple',
        'grape',
        'cherry',
        'pear',
        'cherry',
        'pear',
        'kiwi',
        'banana',
        'kiwi',
        'apple',
        'melon',
        'banana',
        'melon',
        'pineapple',
        'melon',
        'pineapple',
        'cucumber',
        'orange',
        'apple',
        'orange',
        'grape',
        'orange',
        'grape',
        'cherry',
        'pear',
        'cherry',
        'pear',
        'apple',
        'pear',
        'kiwi',
        'banana',
        'kiwi',
        'banana',
        'melon',
        'pineapple',
        'melon',
        'apple',
        'cucumber',
        'pineapple',
        'cucumber',
        'orange',
        'cucumber',
        'orange',
        'grape',
        'cherry',
        'apple',
        'cherry',
        'pear',
        'cherry',
        'pear',
        'kiwi',
        'pear',
        'kiwi',
        'banana',
        'apple',
        'banana',
        'melon',
        'pineapple',
        'melon',
        'pineapple',
        'cucumber',
        'pineapple',
        'cucumber',
        'apple',
        'grape',
        'orange',
        'grape',
        'cherry',
        'grape',
        'cherry',
        'pear',
        'cherry',
        'apple',
        'kiwi',
        'banana',
        'kiwi',
        'banana',
        'melon',
        'banana',
        'melon',
        'pineapple',
        'apple',
        'pineapple'
    ];
    
    while (n >= 10) {
        let sum = 0;
        for (let digit of n.toString()) {
            sum += parseInt(digit);
        }
        n -= sum;
        if (n >= 1 && n <= 100) {
            return list[n];
        }
    }
    return list[n];
}

// tests...pass...