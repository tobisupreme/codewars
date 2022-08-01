/*
PREP:
Parameters:
This function takes in an array

Returns:
This function returns a string

Examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Pseudocode:
// Function takes in an array
// Count elements in the array
// IF array has 0 elements
  // return "no one likes this"
ELSE IF array has 1 element
  // return `${array[0]} likes this`
ELSE IF array has 2 elements
  // return `${array[0]} and ${array[1]} like this`
ELSE IF array has 3 elements
  //  return `${array[0]}, ${array[1]} and ${array[2]} like this`
ELSE
  // return `${array[0]}, ${array[1]} and ${array.length - 2} others like this`
*/

function likes(names) {
  // TODO
}

// Test cases
likes([]); // "no one likes this"
likes(["Peter"]); // "Peter likes this"
likes(["Jacob", "Alex"]); // "Jacob and Alex like this"
likes(["Max", "John", "Mark"]); // "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]); // "Alex, Jacob and 2 others like this"
