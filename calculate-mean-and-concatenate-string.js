// Calculate mean and concatenate string
/*
You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
Here is an example of your return

[3.6, "udiwstagwo"]
In C# and Java the mean return is a double.
*/

// given an arr of nums & chars
// return an array of len == 2
// arr[0] == avg of nums
// arr[1] == str of chars, in given order from arr
// given arr --> only nums & chars

const mean = array => {
    let total = 0;
    let str = '';
    for(let i = 0; i < 20; i+=1){
        let temp = parseInt(array[i]);
        if(!isNaN(temp))total += temp;
        else str += array[i];
    };
    return [(total/10), str]
}

console.log(mean(['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']),[3.6, "udiwstagwo"] )
// test passes