// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    // Split string into array of individual characters
    let str = x.split("");
    // compare each character for space
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            str.splice(i, 1); // delete if character is space
            i--; // adjust for deleted element by taking the index back a step
        } else continue;
    }
    return str.join("");
}
