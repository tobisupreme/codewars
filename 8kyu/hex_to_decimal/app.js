/*
PREP:
Parameters:
This function takes in a string

Returns:
This function returns a number

Example:
input of "1" returns 1
input of "a" returns 10
input of "10" returns 16
input of "FF" returns 255
input of "-C" returns -12

Pseudocode:
// Function takes in a string
    // Map letters A thorugh F to numbers 10 through 15
    // split string into an array
    // convert elements of array into numbers
    // reverse array
    // multiply elements of array by 16^index
    // return sum of multiplication
*/

function hexToDec(hexString) {
  let hexDigits = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  let isNegative = false;
  if (hexString.startsWith("-")) {
    hexString = hexString.slice(1);
    isNegative = true;
  }
  let hexStringSplit = hexString
    .split("")
    .reverse()
    .map((digit) => {
      if (hexDigits[digit.toLowerCase()]) {
        return hexDigits[digit.toLowerCase()];
      } else return Number(digit);
    });
  let decimalNum = hexStringSplit.reduce((acc, digit, index) => {
    return (acc += digit * 16 ** index);
  }, 0);

  if (isNegative) {
    decimalNum = decimalNum * -1;
  }
  return decimalNum;
}

// Using built-in JS methods
function hexToDec2(hexString) {
  return parseInt(hexString, 16);
}

// Test cases
let test1 = hexToDec("1"); // 1
let test2 = hexToDec("a"); // 10
let test3 = hexToDec("10"); // 16
let test4 = hexToDec("FF"); // 255
let test5 = hexToDec("-C"); // -12
