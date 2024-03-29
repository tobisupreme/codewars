/*
PREP:
Parameters:
Function takes in an array

Returns:
This function returns a number

Examples:
See test cases below

Pseudocode:
// Function takes in an array
// Loop through the array
// Square current element, and add to sum
*/

function squareSum(numbers) {
  let sum = 0
  if (numbers.length < 1) return sum
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] ** 2
  }
  return sum
}

// Test cases
const test1 = squareSum([1, 2]) // 5
const test2 = squareSum([0, 3, 4, 5]) // 50
const test3 = squareSum([]) // 0

console.log(test1)
console.log(test2)
console.log(test3)
