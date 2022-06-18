function repeatStr(n, s) {
  let result = "";
  for (i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

// Test cases
console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));
