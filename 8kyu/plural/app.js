// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

/* PREP:
Parameters:
This function takes in a number

Returns:
This function returns a boolean

Pseudocode:
// If number is greater than or equal to zero and not equal to 1, return true
// Else return false
*/

function plural(n) {
    if (n >= 0 && n != 1) {
        return true;
    } else return false;
}
