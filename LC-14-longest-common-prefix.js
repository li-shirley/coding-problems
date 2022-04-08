/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) { // VERTICAL method that loops through ONE character in every string at a time.
    if(strs.length === 0){
        return ""
    }
    let longestStr = "";
    for(let i = 0; i < strs[0].length; i++){ //loop through letters in length of first string, but can do any word.
        const letter = strs[0][i]
        for(let j = 1; j < strs.length; j++){ //loop through each string to see if it also contains current (i-th) letter of first string.
            if(strs[j][i] !== letter){
                return longestStr;
            }
        }
        longestStr += letter //if all strings contain letter, add to longest string.
    }
    return longestStr
};

strs1 = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs1))

