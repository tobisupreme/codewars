/* 
PREP:
Parameters:
This function takes in an array

Returns:
This function returns a number

Examples:
See `readme.md`

Pseudocode:
// Function takes in an array
// Filter array and remove non-positives
// Return sum of array elements
*/

function positiveSum(arr) {}

// Test cases
const test1 = positiveSum([1, 2, 3, 4, 5]); // 15
const test2 = positiveSum([1, -2, 3, 4, 5]); // 13
const test3 = positiveSum([]); // 0
const test4 = positiveSum([-1, -2, -3, -4, -5]); // 0
const test5 = positiveSum([-1, 2, 3, 4, -5]); // 9

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
