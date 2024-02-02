// Correct the mistakes of the character recognition software
/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

const correct = str => {
  let s = str.split('');
  for(let i = 0; i < str.length; i+=1){
    if(s[i] === '5') s[i] = "S";
    else if(s[i] === '0') s[i] = "O";
    else if(s[i] === '1') s[i] = "I";
  };
  return s.join('');
};

// tests pass