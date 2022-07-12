/* 
PREP:
Parameters:
This function takes in a number

Returns:
This function returns an array

Examples:
See `readme.md`

Pseudocode:
// Function takes in a number
// Create an empty array, array
// While number > 0, add number to array. n = n - 1
// return array
*/

const reverseSeq = (n) => {
  const arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

// Test case
const test1 = reverseSeq(5); // [5, 4, 3, 2, 1]

console.log(test1);
