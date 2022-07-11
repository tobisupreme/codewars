/*
PREP:
Parameters:
This function takes in two integers

Returns:
This function returns an integer

Examples:
* digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
* digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
* digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
* digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Pseudocode:
* SPLIT n into array of numbers, nArr
* LET sum = 0
* FOR (let count = 0; while count < nArr.length; count++)
  * sum = nArr[count] ** (p + index)
* ENDFOR
* IF sum % n === 0
  * RETURN sum/n
*ELSE
  * RETURN -1
* ENDIF
*/

function digPow(n, p) {
  let k;
  let nArr = n.toString().split("").map(Number);
  k = nArr.reduce((acc, digit, index) => {
    return (acc += digit ** (p + index));
  }, 0);
  if (k % n === 0) {
    return k / n;
  } else return -1;
}

// Test cases
console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51
