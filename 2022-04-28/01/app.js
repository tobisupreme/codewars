// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
    for (let i = 1; i <= arr.length; i++) {
        arr.splice(i, 1);
    }
    return arr;
}

// let arraY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
