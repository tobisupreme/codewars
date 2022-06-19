/*
PREP:
Parameters:
This function takes in a string

Returns:
This function returns the number of vowels in the given string

Examples:
input of "test" should return 1
input of "teeter" should return 3
input of "trend" should return 1
input of "aabbcc" should return 3

Pseudocode:
// Function takes in an string
// Initialise an array of vowels of the english alphabets
// Initialise a variable to hold the vowel count
// Iterate through string and check whether each character can be found in the array of vowels
  // If found, increase the vowel count
// Return the vowel count
*/

function getCount(str) {
  // Initialise an array of vowels of the english alphabets
  let vowels = ["a", "e", "i", "o", "u"];

  // Initialise a variable to hold the vowel count
  let vowelsCount = 0;

  // Iterate through string and check whether each character can be found in the array of vowels
  for (let i = 0; i < str.length; i++) {
    // If found, increase the vowel count
    if (vowels.indexOf(str[i]) != -1) {
      vowelsCount++;
    }
  }

  // Return the vowel count
  return vowelsCount;
}

// Test cases
console.log(getCount("abracadabra")); // 5
console.log(getCount("test")); // 1
console.log(getCount("teeter")); // 3
console.log(getCount("trend")); // 1
console.log(getCount("aabbcc")); // 2
