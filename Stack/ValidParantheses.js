// Valid Parentheses
/*
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

Every open bracket is closed by the same type of close bracket.
Open brackets are closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Return true if s is a valid string, and false otherwise.

Example 1:

Input: s = "[]"

Output: true
Example 2:

Input: s = "([{}])"

Output: true
Example 3:

Input: s = "[(])"

Output: false
Explanation: The brackets are not closed in the correct order.
*/

function isValid(s){
    if(s.length === 0) return true; // empty string is considered as valid parantheses
    let openingBrackets = "([{";
    let closingBrackets = ")]}";
    let stack = [];
    for(let char of s){
        if(openingBrackets.includes(char)){
            stack.push(char);
        }else if(closingBrackets.includes(char)){
            if(!stack.length) return false; // no opening for this closing
            let lastChar = stack.pop();
            if(openingBrackets.indexOf(lastChar) !== closingBrackets.indexOf(char)){
                return false; // mismatched pair 
            }
        }
    }
    return stack.length === 0;
}
console.log(isValid("([{}])"));


// solution using map
function isValid(s) {
    const matchingBrackets = {
        ")": "(",
        "]": "[",
        "}": "{"
    };
    
    let stack = [];
    
    for (let char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else if (char === ")" || char === "]" || char === "}") {
            if (!stack.length) return false; // nothing to match with
            let lastChar = stack.pop();
            if (lastChar !== matchingBrackets[char]) {
                return false; // mismatched pair
            }
        }
    }
    
    return stack.length === 0; // all matched
}