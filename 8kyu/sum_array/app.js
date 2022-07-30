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
// IF length of array is 0, return 0
// Loop through array and add all elements
// Return sum
*/

// Sum Numbers
function sum (numbers) {
    "use strict";

    if (numbers.length < 1) return 0;

    return numbers.reduce((sum, num) => sum + num, 0)
    
};

// Test cases
const test1 = sum([]) // 0
const test2 = sum([1, 5.2, 4, 0, -1]) // 9.2

console.log(test1);
console.log(test2);
