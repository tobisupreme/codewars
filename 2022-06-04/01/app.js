// https://www.codewars.com/kata/57eae65a4321032ce000002d

function fakeBin(x) {
  let bin = "";
  for (let i = 0; i < x.length; i++) {
    let y;
    Number(x[i]) < 5 ? (y = 0) : (y = 1);
    bin += y;
  }
  return bin;
}

function fakeBin2(x) {
  return Array.from(x).map((x) => (x < 5 ? 0 : 1)).join("");
}


// Test cases
console.log(fakeBin("45385593107843568"));
console.log(fakeBin2("45385593107843568"));
