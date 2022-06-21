/*
PREP:
Parameters:
This function takes in a string

Returns:
This function returns a string

Example:
input of '797' returns '77'
input of '7979797' returns '7777'
input of '165561786121789797' returns '16556178612178977'

Pseudocode:
// Function takes in a string
  // Split string into array for mutability
  // Iterate through elements of array
    // If current element is 9 and elements to the left and right are 7
      // remove current element, start loop from begining
  // Convert array to string
  // Return string
*/

function sevenAte9(str) {
  // Code here
}

// Test cases
let test1 = sevenAte9("797");
let test2 = sevenAte9("7979797");
let test3 = sevenAte9("165561786121789797");

console.log(test1);
console.log(test2);
console.log(test3);
