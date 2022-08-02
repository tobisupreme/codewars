/* 
PREP:
Parameters:
This function takes in an array

Returns:
This function returns a number

Examples:
Input of [[10,0],[3,5],[5,8]]) returns 5
Input of [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) returns 17
Input of [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) returns 21
Input of [[0,0]]) returns 0

Pseudocode:
// Function takes in an array with two elements
// Sum all the first elements in the input array
// Sum all the second elements in the input array
// Return the difference between the sum of all the first elements and the sum of all the second elements in the array
*/

var number = function (busStops) {
  const numOfPeopleInBus = busStops.reduce((acc, x) => {
    acc += x[0] - x[1];
    return acc;
  }, 0);
  return numOfPeopleInBus;
};

// Test cases
const test1 = number([[10,0],[3,5],[5,8]]); // 5
const test2 = number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]); // 17
const test3 = number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]); // 21
const test4 = number([[0,0]]); // 0

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
