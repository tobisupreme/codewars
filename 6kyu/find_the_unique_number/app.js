/*
PREP:
Parameters:
This function takes in an array

Returns:
This function returns a number

Example:
See readme.md for example

Pseudocode:
// Function takes in an array
// Return the element whose index is the same from the start as it is from the end   
*/

function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n))
}

// Test cases
console.log(findUniq([1, 0, 0])) // 1
console.log(findUniq([0, 1, 0])) // 1
console.log(findUniq([0, 0, 1])) // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])) // 2
console.log(findUniq([1, 1, 2, 1, 1])) // 2
console.log(findUniq([3, 10, 3, 3, 3])) // 10
