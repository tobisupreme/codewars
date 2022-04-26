// Bin to decimal
// Complete the function which converts a binary number (given as a string) to a decimal number.

// convert binary to string
// split, convert to number then reverse
// multiply element of array by 2^index 0, add to next element multiplied by 2^index 1 ... by 2^index n
function binToDec(bin) {
    return bin
        .toString()
        .split("")
        .map(Number)
        .reverse()
        .reduce((acc, element, index) => acc + element * 2 ** index, 0);
}

// Binary to decimal
function binToDec(bin) {
    return parseInt(bin, 2); // parseInt(variable, base) does the exact same thing in one line. Phew!
}
