function highAndLow(numbers) {
  let numArray = numbers.split(" ").map(Number);
  let max = Math.max.apply(null, numArray);
  let min = Math.min.apply(null, numArray);
  return `${max.toString()} ${min.toString()}`;
}

// Test cases
let str1 = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";
let str2 = "1 2 3";
console.log(highAndLow(str1));
console.log(highAndLow(str2));
