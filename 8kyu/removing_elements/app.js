/*
PREP:
Parameters:
This function takes in an array

Returns:
The function returns an array

Examples:
input of ["Hello", "Goodbye", "Hello Again"] returns ["Hello", "Hello Again"]
input of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] returns [1, 3, 5, 7, 9]

Pseudocode:
* Loop through the array starting with the second element, arr[1]
    ** remove the element, continue loop
* return arr
*/

function removeEveryOther(arr) {
  for (let i = 1; i <= arr.length; i++) {
    arr.splice(i, 1);
  }
  return arr;
}
