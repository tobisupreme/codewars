/*
PREP:
Parameters:
This function takes in two strings

Returns:
This function returns a string

Examples:
See readme.md

Pseudocode:
// Function takes in two strings a, and b
// Compare length of strings
  // If a.length > b.length return b + a + b
  // Else return a + b + a
*/

function solution(a, b) {
  return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
}
