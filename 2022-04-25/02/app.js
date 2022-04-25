// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// 348597 => [7,9,5,8,4,3]

// convert number to string
// apply split to string
// reverse split array
// convert elements to number
// return number array :D

function digitize(n) {
    return n.toString().split("").reverse().map(Number);
}
