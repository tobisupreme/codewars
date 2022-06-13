var min = function (list) {
  return Math.min.apply(null, list);
};

var max = function (list) {
  return Math.max.apply(null, list);
};

// Test cases
console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
