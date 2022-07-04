/*
PREP:
Parameters:
This function takes in an array

Returns:
The function returns a number

Examples:
Input of [1,2,3,4,6,7,8] returns 6

Pseudocode:
* if the array has one element or the array is empty, return null
* declare a variable j and set it to the first element of the array, arr[0]
* Loop through the array starting with the second element, arr[1]
    ** if the difference between the current element and the declared variable is not 1, return the current element
    ** else, assign the value of current element to variable j
* return null 
*/

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
