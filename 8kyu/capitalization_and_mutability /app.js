// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

/*
Parameters: 
This function takes in a string

Returns:
This function returns a string

Examples:
input of 'word' returns 'Word'
input of 'i' returns 'I'
input of 'glasswear' returns 'Glasswear'

Pseudocode:
Capitalise first letter of word
Add substring of other letters (excluding the first word)
*/

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalizeWord("word"));
console.log(capitalizeWord("i"));
console.log(capitalizeWord("glasswear"));
