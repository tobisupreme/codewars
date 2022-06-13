function toUnderscore(string) {
  return string
    .toString() // convert input to string
    .split(/(?=[A-Z])/) // split at every uppercase instance
    .map((x) => x.toLowerCase()) // convert split elements to lowercase
    .join("_"); // join with underscore
}

// Test cases
let input1 = "TestController";
let input2 = "MoviesAndBooks";
let input3 = "App7Test";
let input4 = 1;

let test1 = toUnderscore(input1);
let test2 = toUnderscore(input2);
let test3 = toUnderscore(input3);
let test4 = toUnderscore(input4);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
