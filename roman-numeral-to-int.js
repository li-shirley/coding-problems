s1 = "III"
expected1 = 3

s2 = "LVIII"
expected2 = 58

s3 = "MCMXCIV"
expected3 = 1994

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    let sum = 0;
    const hashMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    for(i = 0; i < s.length; i++){
        let currentNumeral = s.charAt(i);
        let nextNumeral = s.charAt(i+1);
        if(hashMap[currentNumeral] < hashMap[nextNumeral]) {
            sum += (hashMap[nextNumeral] - hashMap[currentNumeral]);
            i++;
        } else {
            sum += hashMap[currentNumeral];
        }
    }
    return sum;
};

console.log(romanToInt(s1))
console.log(romanToInt(s2))
console.log(romanToInt(s3))