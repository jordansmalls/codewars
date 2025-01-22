// Valid Parentheses
/*
Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

    Constraints:
    - 1 ≤ s.length≤1041 ≤ s.length≤104
    - s consists of parentheses '()[]{}' only.
*/

/**
 * @param {string} s
 * @return {boolean}
 */



const isValid = s => {
    let stack = [];
    for(const idx of s) {
        if(idx == "(" || idx == "[" || idx == "{") {
            stack.push(idx);
        }else {
            if(stack.length == 0) {
                return false;
            }
            let top = stack[stack.length - 1];
            if(
                (idx == ")" && top == "(") ||
                (idx == "]" && top == "[") ||
                (idx == "}" && top == "{")
            ) {
                stack.pop();
            } else {
                return false;
            };
        };
    };
    return stack.length == 0;
};

console.log(isValid("()")) // true
console.log(isValid("{[]}")) // true
console.log(isValid("{[}]")) // false
