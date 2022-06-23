/*
PREP:
Parameters:
This function takes in a string

Returns:
This function returns a number

Example:
input of "1" returns 1
input of "a" returns 10
input of "10" returns 16
input of "FF" returns 255
input of "-C" returns -12

Pseudocode:
// Function takes in a string
    // Map letters A thorugh F to numbers 10 through 15
    // split string into an array
    // convert elements of array into numbers
    // reverse array
    // multiply elements of array by 16^index
    // return sum of multiplication
*/

function hexToDec(hexString) {
  //your code here
}

// Test cases
let test1 = hexToDec("1"); // 1
let test2 = hexToDec("a"); // 10
let test3 = hexToDec("10"); // 16
let test4 = hexToDec("FF"); // 255
let test5 = hexToDec("-C"); // -12
