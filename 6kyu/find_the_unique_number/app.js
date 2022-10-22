/*
PREP:
Parameters:
This function takes in an array

Returns:
This function returns a number

Example:
See readme.md for example

Pseudocode:
// Function takes in an array
// Loop through the array
// Return the first number that isn't equal to the previous    
*/

function findUniq(arr) {
  const count = arr.reduce((obj, x) => {
    if (!obj[x]) {
      obj[x] = 1
    } else {
      obj[x]++
    }
    return obj
  }, {})

  for (const key in count) {
    if (count[key] === 1) return Number(key)
  }
}

// Test cases
console.log(findUniq([1, 0, 0])) // 1
console.log(findUniq([0, 1, 0])) // 1
console.log(findUniq([0, 0, 1])) // 1
console.log(findUniq([1, 1, 1, 2, 1, 1])) // 2
console.log(findUniq([1, 1, 2, 1, 1])) // 2
console.log(findUniq([3, 10, 3, 3, 3])) // 10
