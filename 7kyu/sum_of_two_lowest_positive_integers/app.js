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
// Sort array in ascending order
// Return sum of first two elements in sorted array
*/

function sumTwoSmallestNumbers(numbers) {
    let sortedArray = numbers.sort((a, b) => a - b);
    return sortedArray[0] + sortedArray[1];
}

// Test cases
const test1 = sumTwoSmallestNumbers([5, 8, 12, 19, 22]); // 13 , "Sum should be 13"
const test2 = sumTwoSmallestNumbers([15, 28, 4, 2, 43]); // 6 , "Sum should be 6"
const test3 = sumTwoSmallestNumbers([3, 87, 45, 12, 7]); // 10 , "Sum should be 10"
const test4 = sumTwoSmallestNumbers([23, 71, 33, 82, 1]); // 24 , "Sum should be 24"
const test5 = sumTwoSmallestNumbers([52, 76, 14, 12, 4]); // 16 , "Sum should be 16"

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
