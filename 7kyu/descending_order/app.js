/* 
PREP:
Parameters:
This function takes in a number

Returns:
This function returns a number

Examples:
Input: 42145 | Output: 54421

Input: 145263 | Output: 654321

Input: 123456789 | Output: 987654321

Pseudocode:
// Function takes in a number
// Convert number to string
// Convert string to array
// Sort in decreasing order
// Convert array to string
// Convert string to number
// Return number
*/

function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// Test cases
const test1 = descendingOrder(0); // 0
const test2 = descendingOrder(1); // 1
const test3 = descendingOrder(111); // 111
const test4 = descendingOrder(15); // 51
const test5 = descendingOrder(1021); // 2110
const test6 = descendingOrder(123456789); // 987654321

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);
