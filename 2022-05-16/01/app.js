// Create cache storage
let fibCache = {};

function fibonacci(n) {
  // check if in storage
  if (fibCache[n]) {
    return fibCache[n];
  }

  // return 0 if input is invalid
  if (n < 1 || isNaN(n) === true) {
    return 0;
  }

  // compute value for n
  let result;
  if (n == 1) {
    result = 1;
    return result;
  } else if (n == 2) {
    result = 1;
    return result;
  } else if (n > 2) {
    result = fibonacci(n - 1) + fibonacci(n - 2);

    // add result to cache, then return
    fibCache[n] = result;
    return result;
  }
}
