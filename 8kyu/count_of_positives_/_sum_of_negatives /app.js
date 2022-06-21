// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

/* PREP:
Parameters:
This function takes in an array of integers

Returns:
This function returns an array of integers

Example:
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

Pseudocode:
// Declare variables to sumPositiveNumbers and sumNegativeNumbers
// Iterate through the array
    // If element is greater than zero, add to sumPositiveNumbers
    // If element is less than zero, add to sumNegativeNumbers
// Return array [sumPositiveNumbers, sumNegativeNumbers]
*/

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) return []; // comparing with "null" as the second condition causes the test to fail
    let countPositiveNums = input.filter((x) => x > 0).length;
    let sumNegativeNums = input.filter((x) => x < 0).reduce((acc, x) => (acc += x), 0);
    return [countPositiveNums, sumNegativeNums];
}
