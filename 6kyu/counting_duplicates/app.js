/*
PREP:
Parameters:
This function takes in a string

Returns:
This function returns a number

Example:
See readme.md for example

Pseudocode:
// Function takes in a string
// Split string
// Count the characters
// Return the number of characters with a count greater than 1    
*/

function duplicateCount(text) {
  const splitText = text.split('')
  const count = splitText.reduce((countObj, element) => {
    if (!countObj[element.toLowerCase()]) {
      countObj[element.toLowerCase()] = 0
    }
    countObj[element.toLowerCase()]++
    return countObj
  }, {})

  let returnValue = 0
  let countValues = Object.values(count)
  for (let i = 0; i < countValues.length; i++) {
    if (countValues[i] > 1) {
      returnValue++
    }
  }
    
  return returnValue
}

// Test cases
const test1 = duplicateCount("") // 0
const test2 = duplicateCount("abcde") // 0
const test3 = duplicateCount("aabbcde") // 2
const test4 = duplicateCount("aabBcde") // 2,"should ignore case"
const test5 = duplicateCount("Indivisibility") // 1
const test6 = duplicateCount("Indivisibilities") // 2, "characters may not be adjacent"

console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
console.log(test5)
console.log(test6)
