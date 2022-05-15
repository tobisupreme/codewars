// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

function score(dice) {
  // count dice
  let diceCount = dice.reduce((obj, dice) => {
    if (!obj[dice]) {
      obj[dice] = 0;
    }
    obj[dice]++;
    return obj;
  }, {});

  // compute score
  let diceSum = [];
  for (dice in diceCount) {
    if (diceCount[dice] != 3 && (dice === "1" || dice === "5")) {
      if (dice === "1") {
        if (diceCount[dice] < 3) {
          diceSum.push(100 * diceCount[dice]);
        } else if (diceCount[dice] > 3) {
          diceSum.push(1000 + 100 * (diceCount[dice] - 3));
        }
      }
      if (dice === "5") {
        if (diceCount[dice] < 3) {
          diceSum.push(50 * diceCount[dice]);
        } else if (diceCount[dice] > 3) {
          diceSum.push(500 + 50 * (diceCount[dice] - 3));
        }
      }
    } else if (diceCount[dice] >= 3) {
      if (dice === "1") {
        diceSum.push(1000);
      }
      if (dice === "2") {
        diceSum.push(200);
      }
      if (dice === "3") {
        diceSum.push(300);
      }
      if (dice === "4") {
        diceSum.push(400);
      }
      if (dice === "5") {
        diceSum.push(500);
      }
      if (dice === "6") {
        diceSum.push(600);
      }
    }
  }

  return diceSum.reduce((sum, value) => (sum += value), 0);
}
