/*
PREP:
Parameters:
This function takes in a string

Returns:
This function returns a string

Example:
See test cases for examples

Pseudocode:
// Function takes in a string
// Create an array with the letters of the english alphabet
// Split the string
// For each word, map the characters to the index in the earlier created array and sum it's values
// Return the word at the index with the highest number   
*/

function high(x) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const inputStrArray = x.split(' ')
  const inputStrArrayVal = []
  for (let i = 0; i < inputStrArray.length; i++) {
    const val = inputStrArray[i]
      .split('')
      .map((x) => {
        return alphabet.indexOf(x) + 1
      })
      .reduce((sum, x) => sum + x, 0)
    inputStrArrayVal.push(val)
  }
  const max = Math.max.apply(null, inputStrArrayVal)
  return inputStrArray[inputStrArrayVal.indexOf(max)]
}

// Test cases
console.log(high('man i need a taxi up to ubud')) // 'taxi'
console.log(high('what time are we climbing up the volcano')) // 'volcano'
console.log(high('take me to semynak')) // 'semynak'))
console.log(high('aa b')) // 'aa'
console.log(high('b aa')) // 'b'
console.log(high('bb d')) // 'bb'
console.log(high('d bb')) // 'd'
console.log(high('aaa b')) // 'aaa'
