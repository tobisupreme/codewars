/*
PREP:
Parameters:
This function takes in a number

Returns:
This function returns a number

Examples:
input of 3212 returns 9414
input of 2112 returns 4114
input of 0 returns 0

Pseudocode:
* split num into array with digits as elements
* loop through array and replace element with element ^ 2
* join elements and return as number
*/

function squareDigits(num) {
  let result = Number(
    num
      .toString()
      .split("")
      .map(Number)
      .map((num) => num ** 2)
      .join("")
  );
  return result;
}

// Test cases
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(2112)); // 4114
console.log(squareDigits(0)); // 0
