/*
PREP:
Parameters:
This function takes in a string of space-separated numbers

Returns:
This function returns the highest and lowest number in the given string

Examples:
input of "1 2 3 4 5" should return "5 1"
input of "1 2 -3 4 5" should return "5 -3"
input of "1 9 3 4 -5" should return "9 -5"

Pseudocode:
// Function takes in a string
// Split string and convert all elements to a number
// Assign the maximum and minimum numbers to variables
// Return the maximum and minimum numbers
*/

function highAndLow(numbers) {
  // Split string and convert all elements to a number
  let numArray = numbers.split(" ").map(Number);
    
  // Get the maximum number
  let max = Math.max.apply(null, numArray);
  
  // Get the minimum number
  let min = Math.min.apply(null, numArray);

  // Return the maximum and minimum numbers
  return `${max.toString()} ${min.toString()}`;
}

// Test cases
let str1 = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";
let str2 = "1 2 3";
console.log(highAndLow(str1));
console.log(highAndLow(str2));
