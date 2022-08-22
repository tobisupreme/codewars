/*
PREP:
Parameters:
This function takes in an array and a number

Returns:
This function returns an array

Examples:
input of [20, 37, 20, 21], 1) returns [20,37,21]
input of [1, 1, 3, 3, 7, 2, 2, 2, 2], 3) returns [1, 1, 3, 3, 7, 2, 2, 2]

Pseudocode:
// Function takes in an array and a number
// Iterate through element of array and count elements in the array
// If element count is more than input number, delete element in place
// Return array
*/

function deleteNth(arr, n) {
    // count elements in array
    let count = arr.reduce((obj, element) => {
        if (!obj[element]) {
            obj[element] = 0;
        }
        obj[element]++;
        return obj;
    }, {});

    // add n to count
    for (let element in count) {
        count[element] = [count[element], n];
    }

    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]][1] < 1) {
            arr.splice(i, 1);
            i -= 1;
        }
        count[arr[i]][0] -= 1;
        count[arr[i]][1] -= 1;
    }

    return arr;
}

// Test cases
const test1 = deleteNth([20, 37, 20, 21], 1); // [20,37,21]
const test2 = deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3); // [1, 1, 3, 3, 7, 2, 2, 2]
const test3 = deleteNth([41, 9, 43, 41, 27, 27, 27, 43, 43, 41, 27, 43, 41, 27, 27, 41, 27, 27, 27], 2); // [1, 1, 3, 3, 7, 2, 2, 2]

console.log(test1);
console.log(test2);
console.log(test3);
