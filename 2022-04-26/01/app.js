// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.

// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

// Take in the string and split it to array (for easy manipulation)
// Convert all spaces to a custom delimiter
// Delete all numbers
// Convert array to string using custom delimiter

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
