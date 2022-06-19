/*
PREP:
Parameters:
This function takes in a string

Returns:
This function returns an array

Example:
input of "xxa xxb xxc xxd xa xb xc xd" returns ['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa']

Pseudocode:
// Function takes in a string
  // Split string
  // Sort array of split string elements based on the length in descending order
    // If the length of string is the same, sort in descending alphabetical order
  // Return sorted array of split string
*/

function lineupStudents(students) {
  return students.split(" ").sort((a, b) => {
    if (b.length == a.length) {
      return b.localeCompare(a);
    }
    return b.length - a.length;
  });
}

// Test cases
let string = "Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi";

let string2 = "xxa xxb xxc xxd xa xb xc xd";

let test1 = lineupStudents(string);
let test2 = lineupStudents(string2);

console.log(test1);
console.log(test2);
