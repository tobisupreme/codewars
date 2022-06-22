// Convert number to reversed array of digits

/* 
// PREP:
// Paramaeters:
    This function takes in a random non-negative number

// Returns:
    This function returns the digits of this number within an array in reverse order

// Example:
    Input of 348597 returns [7,9,5,8,4,3]

// Pseudocode:
    convert number to string
    apply split to string
    reverse split array
    convert elements to number
    return number array
*/

function digitize(n) {
    return n.toString().split("").reverse().map(Number);
}
