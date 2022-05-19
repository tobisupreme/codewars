// Sum of differences in an array
// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// [2, 1, 10]  ->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 ( Nothing in Haskell ).

/*
Pseudocode
01. If array is empty or it's length is 1, return 0
02. Sort array in descending order
03. Loop through array and return the sum of differences
*/

let arr = [7, 45, 32, 5, 34, 31, 5]

function sumDiffArr(arr) {
    // If array is empty or it's length is 1, return 0
    if (arr.length < 2) {
        return 0
    }

    // Sort array in descending order
    let sorted = arr.sort((a, b) => b - a);

    // Loop through array and return the sum of differences
    let acc = 0;
    for (let i = 1; i < sorted.length; i ++) {
        acc += sorted[i - 1] - sorted[i];
    }

    return acc;
}
console.log(sumDiffArr(arr));
console.log(sumDiffArr([1, 2, 10]));