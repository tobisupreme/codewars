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
  let no = names.length;
  if (no < 1) {
    return `no one likes this`;
  } else if (no < 2) {
    return `${names[0]} likes this`;
  } else if (no < 3) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (no < 4) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${no - 2} others like this`;
  }
}

// Test cases
const test1 = likes([]); // "no one likes this"
const test2 = likes(["Peter"]); // "Peter likes this"
const test3 = likes(["Jacob", "Alex"]); // "Jacob and Alex like this"
const test4 = likes(["Max", "John", "Mark"]); // "Max, John and Mark like this"
const test5 = likes(["Alex", "Jacob", "Mark", "Max"]); // "Alex, Jacob and 2 others like this"

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
