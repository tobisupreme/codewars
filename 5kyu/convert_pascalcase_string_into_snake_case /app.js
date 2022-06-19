/*
PREP:
Parameters:
This function takes in an input

Returns:
This function returns the given string in snake_case

Examples:
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"

Pseudocode:
// Function takes in an input
// Convert input to a string
// Spilt string at every uppercase instance
// Convert split elements to lowercase
// Join elements with underscore
// Return joined string
*/

function toUnderscore(string) {
  return string
    .toString() // convert input to string
    .split(/(?=[A-Z])/) // split at every uppercase instance
    .map((x) => x.toLowerCase()) // convert split elements to lowercase
    .join("_"); // join with underscore
}

// Test cases
console.log(toUnderscore("TestController"));
console.log(toUnderscore("MoviesAndBooks"));
console.log(toUnderscore("App7Test"));
console.log(toUnderscore(1));
