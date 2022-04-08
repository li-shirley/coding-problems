/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    if(s.length % 2 !== 0){
        return false
    }
    for(i = 0; i < s.length; i++){
        if(s[i] === "{" || s[i] === "(" || s[i] === "["){
            stack.push(s[i])
        }
        else if (s[i] === "}" && stack[stack.length-1] === "{"){
            stack.pop()
        }
        else if (s[i] === ")" && stack[stack.length-1] === "("){
            stack.pop()
        }
        else if (s[i] === "]" && stack[stack.length-1] === "["){
            stack.pop()
        } 
        else return false;
    }
    if(stack.length === 0){
        return true
    } else return false;
};

function isValid2(s){
    if(s.length % 2 !== 0){
        return false
    }
    const hashMap = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    const stack = [];
    for(i = 0; i < s.length; i++){
        if(s[i] in hashMap){ // if hashMap contains the keys of the opening parentheses; same as if(s[i] === "{" || s[i] === "(" || s[i] === "[")
            stack.push(s[i])
        }
        else if(s[i] !== hashMap[stack.pop()]){ // otherwise, if s[i] is closing parentheses (i.e. "}"), pop the last item in stack (i.e. "{" and see if hashMap["{"] matches s[i])
            return false;
        }
    }
    return stack.length === 0; // stack should be empty if valid. 
}