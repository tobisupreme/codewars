// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

/*
PREP:
    This function takes in two inputs, an array of numbers and a number

Returns:
    This function returns a boolean

Examples:
    input of ([2, 3], 5) should return True
    input of ([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True
    input of ([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False
    input of ([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False
    input of ([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False

Pseudocode:
    // create new variable to hold the points of the entire class, including yourPoints
    // calculate average points
    // if yourPoints is greater than average, return true, else, false
*/

let classPoints = [65, 43, 25, 90, 54, 34, 56, 57, 40, 99],
  yourPoints = 92;

function betterThanAverage(classPoints, yourPoints) {
  // new variable to hold the points of the entire class, including yourPoints
  let entireClassPoints = classPoints;
  classPoints.push(yourPoints); // adds yourPoints to the new array

  // calculate average points
  let totalClassPoints = entireClassPoints.reduce((total, points) => (total += points), 0);
  let averageClassPoints = totalClassPoints / entireClassPoints.length;

  // if yourPoints is greater than average, return true, else, false
  console.log(yourPoints > averageClassPoints);
  return yourPoints > averageClassPoints;
}

// Test Cases
betterThanAverage([2, 3], 5); // true
betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75); // true
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9); // false
betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50); // false
betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21); // false
