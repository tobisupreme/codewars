/*
PREP:
Parameters: This function takes in an array of numbers

Returns: This function returns a number

Examples: 
See test cases below

Pseudocode:
- Function takes in an array
- Declare a variable min 
- Loop through array
- Assign first element of array to min
- compare current element to min
- IF current element is less than min
  - assign current element to min
- End If
- return min
*/

function findSmallestInt(args) {

}

// Test cases
const test1 = findSmallestInt([78,56,232,12,8]) // 8,'Should return the smallest int 8'
const test2 = findSmallestInt([78,56,232,12,18]) // 12,'Should return the smallest int 12'
const test3 = findSmallestInt([78,56,232,412,228]) // 56,'Should return the smallest int 56'
const test4 = findSmallestInt([78,56,232,12,0]) // 0,'Should return the smallest int 0'
const test5 = findSmallestInt([1,56,232,12,8]) // 1,'Should return the smallest int 1'
  
console.log(test1)
console.log(test2)
console.log(test3)
console.log(test4)
console.log(test5)
