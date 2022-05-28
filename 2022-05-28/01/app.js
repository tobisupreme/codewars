// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// function makeNegative(num) {
//   if (num > 0) {
//     return num * -1;
//   }
//   return num;
// }

function makeNegative(num) {
    (num > 0) ? num *= -1 : num;
    return num
  }
  