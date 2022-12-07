// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
    return x.reduce((acc, e) => (acc += +e), 0);
}

function sumMix2(x) {
    return x.reduce((acc, e) => (acc += parseInt(e)), 0);
}
