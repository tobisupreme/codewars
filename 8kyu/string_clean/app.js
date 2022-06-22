// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

/* 
// PREP:
// Paramaeters:
    This function will take in a string

// Returns:
    This function cleans out all numeric characters, and returns a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

// Example:
    input of '! !'                 returns '! !'
    input of '123456789'           returns ''
    input of 'This looks5 grea8t!' returns 'This looks great!'

// Pseudocode:
    // Take in the string and split it to array (for easy manipulation)
    // Convert all spaces to a custom delimiter
    // Delete all numbers
    // Convert array to string using custom delimiter
*/

function stringClean(s) {
    return s
        .split("")
        .map((x) => (x === " " ? "customdelim" : x))
        .map((x, i) => (isNaN(x) ? x : s.slice(i, i)))
        .map((x) => (x === "customdelim" ? " " : x))
        .join("");
}

// There is a replace method for strings. Combined with regex, the one-liner below does the same as my mulitline code 😂
function stringClean2(s) {
    return s.replace(/\d/g, "");
}

// Another one
function stringClean3(s) {
    return s.replace(/[0-9]/g, "");
}
