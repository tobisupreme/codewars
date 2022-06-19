/*
PREP:
Parameters:
This function takes in a string

Returns:
This function returns a character in the given string

Examples:
input of "test" should return "e"
input of "teeter" should return "r"
input of "trend" should return "t" (all the characters are unique)
input of "aabbcc" should return null (all the characters are repeated)

Pseudocode:
// Function takes in an string
// Iterate through string and count instances of each character
// Sort the result in ascending order
  // If the first count is one, set the result to that character
  // Else there are no single occurences. Set the result to null
// Return result
*/

function firstNonRepeated(s) {
  let store = {}, result;

  // Loop over the string and add elements along with the number of occurences to store
  for (let i = 0; i < s.length; i++) {
    if (!store[s[i]]) {
      store[s[i]] = 0;
    }
    if (store[s[i]] > 0) {
    }
    store[s[i]]++;
  }

  // Save all entries of store as an array
  let entries = Object.entries(store);

  // Sort the array in ascending order
  let entriesSorted = entries.sort((a, b) => a[1] - b[1]);

  // return the first (single occuring) element in the array
  if (entriesSorted[0][1] == 1) {
    result = entriesSorted[0][0];
  } else {
    result = null;
  }
  return result;
}

// Another solution
/*
Pseudocode:
// Iterate through the string
  // If the index from the start matches the index from the end then there is only one occurence. Return element
  // Else, there are multiple occurences
// Return null
*/

function firstNonRepeated2(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return s[i];
    }
  }
  return null;
}

// Test cases
console.log(firstNonRepeated("test"));
console.log(firstNonRepeated("teeter"));
console.log(firstNonRepeated("1122321235121222"));
console.log(firstNonRepeated("rend"));
console.log(firstNonRepeated("mouoknltuqrvlqtsrnpviskmp"));
console.log(firstNonRepeated("kgjjcrlrmipmpkhqiooqhlngn"));
console.log(firstNonRepeated("pqhrijrkloknpqlpnijhmmo"));

