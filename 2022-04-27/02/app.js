// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

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
    return yourPoints > averageClassPoints;
}
