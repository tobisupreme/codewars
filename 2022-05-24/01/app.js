// I love you, a little , a lot, passionately ... not at all
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

// subtract 6 from the number until the final answer is between 1 and 6
// return matching result

function howMuchILoveYou(nbPetals) {
  if (isNaN(nbPetals) == true || nbPetals < 1) {
    return "You are not on the scale";
  } else if (nbPetals == 1) {
    return "I love you";
  } else if (nbPetals == 2) {
    return "a little";
  } else if (nbPetals == 3) {
    return "a lot";
  } else if (nbPetals == 4) {
    return "passionately";
  } else if (nbPetals == 5) {
    return "madly";
  } else if (nbPetals == 6) {
    return "not at all";
  } else {
    return howMuchILoveYou(nbPetals - 6);
  }
}

let try7, try3, try6;

try7 = howMuchILoveYou(7);
try3 = howMuchILoveYou(3);
try6 = howMuchILoveYou(6);

console.log(try7);
console.log(try3);
console.log(try6);
