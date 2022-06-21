// https://www.codewars.com/kata/5b853229cfde412a470000d0/

function checkDown(a, b) {
  let counter = 0;
  for (let i = a, j = b; j > 0; j--, i--) {
    if (i == 2 * j) {
      return counter;
    }
    counter++;
  }
}

function checkUp(a, b) {
  let counter = 0;
  for (let i = a, j = b; i < 200; j++, i++) {
    if (i == 2 * j) {
      return counter;
    }
    counter++;
  }
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let checkDownVal = checkDown(dadYearsOld, sonYearsOld);
    let checkUpVal = checkUp(dadYearsOld, sonYearsOld);
    if (checkDownVal) {
      return checkDownVal;
    } else if (checkUpVal) {
      return checkUpVal;
    } else {
      return 0;
    }
  }

