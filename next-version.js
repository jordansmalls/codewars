// Next Version
/*
You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.

Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.

For example:

Current           ->  Next version
"1.2.3"           ->  "1.2.4"
"0.9.9"           ->  "1.0.0"
*/

const nextVersion = str => {
    let arr = str.split('.')
    for(let i = arr.length - 1; i >= 0; i--){
        if(i > 0 && arr[i] == '9'){
            arr[i] = 0
        }else{
            arr[i]++
            break
        }
    }
    return arr.join('.')
}

console.log(nextVersion("1.2.3"),"1.2.4")
console.log(nextVersion("0.9.9"),"1.0.0" )


// tests pass