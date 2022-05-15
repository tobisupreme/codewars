// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/javascript

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  // count elements of str 1
  let str1Bank = str1.split("").reduce((obj, element) => {
    if (!obj[element]) {
      obj[element] = 0;
    }
    obj[element]++;
    return obj;
  }, {});
  // ---------------------------

  // iterate over str2 for instances of the letter
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] in str1Bank) {
      str1Bank[str2[i]]--;
    } else return false
  }
  // ---------------------------

  // check str1Bank for any values less than 0
  for (element in str1Bank) {
    if (str1Bank[element] < 0) {
      return false
    }
  }
  return true
}

// Test cases
console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));
console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));
console.log(scramble("scriptjavx", "javascript"));
console.log(scramble("scriptingjava", "javascript"));
console.log(scramble("scriptsjava", "javascripts"));
console.log(scramble("javscripts", "javascript"));
console.log(scramble("jscripts", "javascript"));
console.log(scramble("aabbcamaomsccdd", "commas"));
console.log(scramble("commas", "commas"));
console.log(scramble("sammoc", "commas"));
