let factorial_cache = {};

function factorial(n) {
  let value;
  if (n in factorial_cache) {
    return factorial_cache[n];
  } else if (n < 1) {
    value = null;
  } else if (n == 1) {
    value = 1;
  } else if (n == 2) {
    value = 2;
  } else {
    value = n * factorial(n - 1);
    factorial_cache[n] = value;
  }
  return value.toString();
}

// Test cases
console.log(factorial(1)); // '1'
console.log(factorial(5)); // '120'
console.log(factorial(9)); // '362880'
console.log(factorial(15)); // '1307674368000'
