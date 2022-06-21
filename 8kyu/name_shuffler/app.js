// Write a function that returns a string in which firstname is swapped with last name.

/*
Parameters: 
This function takes in a string

Returns:
This function returns a string

Examples:
input of 'john McClane' returns 'McClane john'

Pseudocode:
// Split string
// Reverse array
// Join array
// Return string
*/

function nameShuffler(str) {
    return str.split(" ").reverse().join(" ");
}
