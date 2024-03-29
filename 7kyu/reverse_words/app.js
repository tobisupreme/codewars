/* 
PREP:
Parameters:
This function takes in a string

Returns:
This function returns a string

Examples:
See `readme.md`

Pseudocode:
// Function takes in a string
// Split string on space into array of string
// For each string in array
  // reverse word
// End for
// Join array of words with space as delimiter
// Return joined string
*/

function reverseWords(str) {
  let strSplit = str.split(" ");
  for (let i = 0; i < strSplit.length; i++) {
    strSplit[i] = strSplit[i].split("").reverse().join("");
  }
  strSplit = strSplit.join(" ")

  return strSplit;
}

// Test cases
const test1 = reverseWords("The quick brown fox jumps over the lazy dog."); // 'ehT kciuq nworb xof spmuj revo eht yzal .god');
const test2 = reverseWords("apple"); // 'elppa');
const test3 = reverseWords("a b c d"); // 'a b c d');
const test4 = reverseWords("double  spaced  words"); // 'elbuod  decaps  sdrow');

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
