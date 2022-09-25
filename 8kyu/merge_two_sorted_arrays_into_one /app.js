function mergeArrays(arr1, arr2) {
    // concatenate the two arrays
    let arr = arr1.concat(arr2);
    // sort the array in ascending order
    arr = arr.sort((a, b) => a - b);
    // check and remove duplicates
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] === arr[i]) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
