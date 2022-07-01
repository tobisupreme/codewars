function firstNonConsecutive(arr) {
    if (arr.length === 1 || arr === []) {
        return null;
    }

    let j = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - j !== 1) {
            return arr[i];
        } else {
            j = arr[i];
        }
    }

    return null;
}

// Test case
console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
