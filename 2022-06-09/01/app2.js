function buyTofu(cost, box) {
  // count instances of mon
  const mon = box.split(" ").filter((x) => x.toLowerCase() === "mon").length;
  console.log(mon);

  // count instances of monme
  const monme = box.split(" ").filter((x) => x.toLowerCase() === "monme").length;
  console.log(monme);

  // sum of all coins
  const sumOfCoins = mon + monme * 60;
  console.log(sumOfCoins);

  // num of monme coins needed
  console.log(cost);
  const monmeNeeded = Math.min(Math.floor(cost / 60), monme);
  console.log(monmeNeeded);

  // num of mon coins needed
  const monNeeded = cost - monmeNeeded * 60;
  console.log(monNeeded);

  // check if balance is adequate
  if (monmeNeeded > monme || monNeeded > mon) {
    return "leaving the market";
  }

  return [mon, monme, sumOfCoins, monNeeded + monmeNeeded];
}

// Test cases
var box3 = "mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon";
let cost3 = 124;

var box2 = "mon mon mon";
let cost2 = 674;

var box = "mon monme";
let cost = 5;

var box4 = "monme mon mon monme";
var cost4 = 1;

console.log(buyTofu(cost, box));
console.log(buyTofu(cost2, box2));
console.log(buyTofu(cost3, box3));
console.log(buyTofu(cost4, box4));
