// I love you, a little , a lot, passionately ... not at all
// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

// subtract 6 from the number until the final answer is between 1 and 6
// return matching result

// phrase store
const lovePhrase = {
  0: "not at all",
  1: "I love you",
  2: "a little",
  3: "a lot",
  4: "passionately",
  5: "madly",
};

// reduce number to last 6 and return appropriate phrasing
function howMuchILoveYou(nbPetals) {
  return lovePhrase[nbPetals % 6];
}
