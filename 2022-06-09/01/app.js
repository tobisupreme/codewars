function buyTofu(cost, box) {
  let result = [];

  // filter input for coins
  let newBox = box.split(" ").filter((x) => x == "mon" || x == "monme");

  // count coins in box
  let obj = newBox.reduce((count, element) => {
    if (!count[element]) {
      count[element] = 0;
    }
    count[element]++;
    return count;
  }, {});

  // set "mon" and "monme" if they don't exist
  if (!("mon" in obj)) {
    obj["mon"] = 0;
  }
  if (!("monme" in obj)) {
    obj["monme"] = 0;
  }
  
  for (key in obj) {
    result.push(obj[key]);
  }

  // calculate value of coins in box
  let totalValue = 0,
    monValue = 1,
    monmeValue = 60;
  for (const key in obj) {
    if (key == "mon") {
      totalValue += obj[key] * monValue;
    }
    if (key == "monme") {
      totalValue += obj[key] * monmeValue;
    }
  }
  result.push(totalValue);

  // calculate min number of coins needed for Tofu
  let minCoin = minCoins(cost, obj);
  if (typeof minCoin != "number") {
    return minCoin;
  } else {
    result.push(minCoin);
  }
  return result;
}

function minCoins(cost, obj) {
  let count = 0;

  if (cost > 59 && obj.monme > 0) {
    for (let i = obj.monme; i > 0 && cost > 59; i--) {
      count++;
      cost -= 60;
      obj["monme"]--;
    }
  }

  if (obj.mon > 0) {
    for (let i = obj.mon; i > 0 && cost != 0; i--) {
      count++;
      cost--;
      obj["mon"]--;
    }
  }

  if (cost != 0) {
    return "leaving the market";
  } else return count;
}

console.log(buyTofu(124, "mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon"));
console.log(buyTofu(674, "mon mon mon"));
console.log(buyTofu(124, "mon mon mon mon mon apple mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon monme mon mon mon mon cloth mon mon mon mon mon mon mon mon mon cloth mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon"));

let cost1 = 124;
let box1 = "mon mon mon mon mon apple mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon monme mon mon mon mon cloth mon mon mon mon mon mon mon mon mon cloth mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon";
console.log(buyTofu(cost1, box1));
/* console.log(buyTofu(one))
console.log(buyTofu(two))
console.log(buyTofu(three)) */
