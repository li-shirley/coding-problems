/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:

-231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if(x < 0){
        return false;
    }
    let str = x.toString();
    let i = 0;
    let j = str.length-1
    while(i <= j){
        if(str[i] !== str[j]){
            return false;
        } else {
            i++;
            j--
        }
    }
    return true;
}

x1 = 121
x2 = -121
x3 = 10

// console.log(isPalindrome(x1))
// console.log(isPalindrome(x2))
// console.log(isPalindrome(x3))

var isPalindrome2 = function (x) {
    if(x === 0){
        return true;
    }
    else if(x < 0 || x % 10 === 0){
        return false;
    }
    let num = x;
    let mirroredNum = 0;
    while (num > 0){
        mirroredNum = (mirroredNum * 10) + (num % 10);
        num = Math.floor(num/10);
    }
    return x === mirroredNum;
}

console.log(isPalindrome2(x1))
console.log(isPalindrome2(x2))
console.log(isPalindrome2(x3))