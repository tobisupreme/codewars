/*
PREP:
Parameters:
This function takes in two parameters: a string, s and an integer, n

Returns:
This function returns the given string n times

Examples:
input of 6 & "I"     should return "IIIIII"
input of 5 & "Hello" should return "HelloHelloHelloHelloHello"

Pseudocode:
// Function takes in a string and number
// Return string number times
*/

function repeatStr(n, s) {
  let result = "";
  for (i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

function repeatStr2(n, s) {
  return s.repeat(n);
}

// Test cases
console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));

console.log(repeatStr2(3, "*"));
console.log(repeatStr2(5, "#"));
console.log(repeatStr2(2, "ha "));
