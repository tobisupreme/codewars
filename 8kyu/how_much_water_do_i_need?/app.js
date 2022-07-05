/*
PREP:
Parameters:
This function takes in three parameters as numbers

Returns:
This function returns a string or a number

Examples:
Refer to test cases

Pseudocode:
* if clothes are more than 2 times the load, return "Too much clothes"
* else if clothes are less than load, return "not enough clothes"
* else return water * 1.1 ** (clothes - load)
*/

function howMuchWater(water, load, clothes) {
  if (clothes > 2 * load) {
    return "Too much clothes";
  } else if (clothes < load) {
    return "Not enough clothes";
  } else {
    return Number((water * 1.1 ** (clothes - load)).toFixed(2));
  }
}

// Test cases
console.log(howMuchWater(10,10,21)) // 'Too much clothes'
console.log(howMuchWater(10,10,2)) // 'Not enough clothes'
console.log(howMuchWater(10,11,20)) // 23.58
console.log(howMuchWater(50,15,29)) // 189.87
