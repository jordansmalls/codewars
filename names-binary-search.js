// Names with Binary Search
/*
If you needed to get a 
Create a function that uses the binary search algorithm, to efficiently search an input array of sorted names for a specific name. Return the number of the index where the input name is found.
*/

let names = ['Alice', 'Blerim', 'Bob', 'Bryan', 'Charlie', 'Daryl', 'David', 'Eve', 'Frank', 'Jordan', 'Joseph', 'Olivia', 'Peter', 'Rene', 'Ryan', 'Ted', 'Ursula', 'Victoria', 'Wilbur']; 

const binarySearchName = (array, name) => {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (array[middle] !== name && start <= end) {
        if (name < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }

    return (array[middle] !== name) ? -1 : middle;
}

console.log(binarySearchName(names, 'Jordan'), 9);
console.log(binarySearchName(names, 'Alice'), 0);
console.log(binarySearchName(names, 'Bryan'), 3);
console.log(binarySearchName(names, 'Rene'), 13);