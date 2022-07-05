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
