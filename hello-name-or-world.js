// Hello, Name, or World!
/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

 With `name` = "john"  => return "Hello, John!"
*/

const hello = n => {
    n = n.toLowerCase();
    if(n.length <= 0){
        return 'Hello, World!'
    }else{
        let arr = n.split('')
        arr[0] = arr[0].toUpperCase()
        let ans = arr.join('')
        return `Hello, ${ans}!`
    }
}

// works

// alternate solution that works on codewars website

const hello2 = s =>
  `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;