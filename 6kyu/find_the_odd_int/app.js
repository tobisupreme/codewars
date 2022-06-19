/*
PREP:
Parameters:
This function takes in an array

Returns:
This function returns a number

Examples:
If we are given [7] should return `7`, because it occurs 1 time (which is odd).
If we are given [0] should return `0`, because it occurs 1 time (which is odd).
If we are given [1,1,2] should return `2`, because it occurs 1 time (which is odd).
If we are given [0,1,0,1,0] should return `0`, because it occurs 3 times (which is odd).
If we are given [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

Pseudocode:
// Function takes in an array
// Iterate through array and count instances of each element
// Check if instance count is even or odd by dividing count by 2
  // If the remainder is 0, it's an even number
  // Else it's an odd number
// Return element with odd number of counts
*/

function findOdd(A) {
  
  return 0;
}

// Test cases
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])) // 5
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])) // -1
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])) // 5
console.log(findOdd([10])) // 10
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])) // 10
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])) // 1
