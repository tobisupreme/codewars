/*
PREP:
Parameters:
These functions take in an array of integers

Returns:
These functions return an integer

Examples:
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

Pseudocode:
// Function takes in an array of integers
  // Sort through the array in ascending order
  // Return the first element in the array as the minimum integer
  // Return the last element in the array as the minimum integer
*/

var min = function (list) {
  let sorted = list.sort((a, b) => {
    if (b > a) {
      return -1
    } 
  })
  return sorted[0]
  // return Math.min.apply(null, list);
};

var max = function (list) {
  // let sorted = list.sort((a, b) => b - a)
  let sorted = list.sort((a, b) => {
    if (b > a) {
      return -1
    } 
  })
  return sorted[sorted.length - 1]
  return Math.max.apply(null, list);
};

// Solutions in one line
var min1 = function (list) {
  return Math.min.apply(null, list);
};

var max1 = function (list) {
  return Math.max.apply(null, list);
};

// Test cases
console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
