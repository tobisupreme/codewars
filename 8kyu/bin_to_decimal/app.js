// Bin to decimal
// Complete the function which converts a binary number (given as a string) to a decimal number.

/*
PREP:
Parameters:
Function takes in a string

Returns:
This function returns a number

Examples:
input of "1000011" returns 67
input of 1110011 returns 115
input of 11101111111 returns 1919

Pseudocode:
// Function takes in a string
    // split string into an array
    // convert elements of array into numbers
    // reverse array
    // multiply element of array by 2^index
    // return sum all elements multiplied by 2 ^index
*/

function binToDec(bin) {
    return bin
        .toString()
        .split("")
        .map(Number)
        .reverse()
        .reduce((acc, element, index) => acc + element * 2 ** index, 0);
}

// Binary to decimal
function binToDec2(bin) {
    return parseInt(bin, 2); // parseInt(variable, base) does the exact same thing in one line. Phew!
}

// Test cases
console.log(binToDec("1000011")) // 67
console.log(binToDec(1110011)) // 115
console.log(binToDec(11101111111)) // 1919





