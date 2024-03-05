// Next Version
/*
You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.

Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.

For example:

Current           ->  Next version
"1.2.3"           ->  "1.2.4"
"0.9.9"           ->  "1.0.0"
*/

const nextVersion = version => {
  let array = version.split('.');
  for(let i = array.length - 1; i >= 0; i--){
    if(i > 0 && array[i] == '9'){
      array[i] = 0;
    }else{
      array[i]++;
      break;
    }
  }
  return array.join('.');
}

console.log(nextVersion("1.2.3")) // "1.2.4"

// tests pass