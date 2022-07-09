function duplicateCount(text) {
  //...
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
