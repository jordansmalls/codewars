// Dropcaps
/*
DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.
But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.
should work also on Leading and Trailing Spaces and caps.
"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space"
"   space WALK   " => "   Space Walk   " 
*/

const dropCap = n => {
    let arr = n.split(' ');
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > 2){
            arr[i] = arr[i].toLowerCase().split('')
            arr[i][0] = arr[i][0].toUpperCase()
            arr[i] = arr[i].join('')
        }
    }
    return arr.join(' ')
}

// passes
// refactored



const dropCapTwo = n => {
    let arr = n.split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 2) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
         }
    }
    return arr.join(' ');
    }

// passes tests