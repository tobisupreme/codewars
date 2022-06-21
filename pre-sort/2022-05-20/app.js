// https://www.codewars.com/kata/5bb904724c47249b10000131/

// Total amount of points
// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// solved using reduce()
function points(games) {
  return games.reduce((acc, element) => {
    let [x, a, y] = element;
    x = Number(x);
    y = Number(y);
    if (x > y) {
      acc += 3;
    } else if (x == y) {
      acc += 1;
    } else {
      acc += 0;
    }
    return acc;
  }, 0);
}

// solved using a for-loop
function points2(games) {
  let acc = 0;
  for (let i = 0; i < games.length; i++) {
    let [x, a, y] = games[i];
    x = Number(x);
    y = Number(y);
    if (x > y) {
      acc += 3;
    } else if (x < y) {
      acc += 0;
    } else {
      acc += 1;
    }
  }
  return acc;
}

//
