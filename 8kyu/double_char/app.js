/*
PREP:
Parameters:
Function takes in a string

Returns:
This function returns a string

Examples:
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Pseudocode:
// Function takes in a string
  // Initialise an empty string
  // Loop through the input string
    // On every iteration, add the current character to the initialised string two times
  // Return final string
*/

function doubleChar(str) {
  let strFinal = "";
  for (let i = 0; i < str.length; i++) {
    strFinal += str[i] + str[i];
  }
  return strFinal;
}

// Test
console.log(doubleChar("post"));
