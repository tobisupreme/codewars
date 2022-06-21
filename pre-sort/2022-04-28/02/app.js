// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null.

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
