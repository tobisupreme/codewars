// https://www.codewars.com/kata/57eae65a4321032ce000002d
/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Parameters:
This function takes in a string

Returns:
This function returns a string

Examples:
input of "45385593107843568" returns "01011110001100111 ​​​"
input of "4872386746597" returns "0110011101111 ​​​"
input of "09789872" returns "01111110 ​​​"
input of "638956" returns "101111 ​​​"
input of "45385593107843568" returns "01011110001100111 ​​​"

Pseudocode:
// Initialise empty return string
// Iterate through string
//   If current element is less than 5, push 0 to return string
//   Else push 1 to return string
// Return string
*/

function fakeBin(x) {
  let bin = "";
  for (let i = 0; i < x.length; i++) {
    let y;
    Number(x[i]) < 5 ? (y = 0) : (y = 1);
    bin += y;
  }
  return bin;
}

function fakeBin2(x) {
  return Array.from(x).map((x) => (x < 5 ? 0 : 1)).join("");
}

// Test cases
console.log(fakeBin("45385593107843568"));
console.log(fakeBin("4872386746597"));
console.log(fakeBin("09789872"));
console.log(fakeBin("638956"));
console.log(fakeBin2("45385593107843568"));
