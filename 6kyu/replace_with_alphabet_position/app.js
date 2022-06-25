/* 
PREP:
Parameters:
  // This function takes in a string

Returns: 
  // This function returns a string

Examples:
  // See readme.md

Pseudocode:
  // Create an object with letters and their positions in the alphabet
  // Loop through characters of the string
    // If the character matches a key in the object, return it's position
  // Return new string
*/

function alphabetPosition(text) {
  let alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let string = text.toLowerCase().split("").filter(x=> (x in alphabet)).map(x => alphabet[x]).join(" ")
  return string;
}

// Test Cases
console.log(alphabetPosition("The"))
console.log(alphabetPosition("The sunset sets at twelve o' clock."))