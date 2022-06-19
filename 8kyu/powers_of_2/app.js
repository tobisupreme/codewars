/*
PREP:
Parameters:
This function takes in a non-negative integer

Returns:
This function returns an array

Examples:
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

Pseudocode:
// Function takes in an integer
// Initialise an empty array
// Use for-loop starting at 0
// The loop will increment by 1 and terminate at the given number
  // For every iteration, push 2 raised to the power of the current number to the array 
// Return the array
*/

function powersOfTwo(n){
  // Initialise an empty array
  let result = [];

  for (let i = 0; i <= n; i++) {
    let power = 2 ** i;
    result.push(power);
  }

  return result;
}