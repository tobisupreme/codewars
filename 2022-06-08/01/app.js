// valid vegetables
const filter = ["cabbage", "carrot", "celery", "cucumber", "mushroom", "onion", "pepper", "potato", "tofu", "turnip"];

function countVegetables(string) {
  // split items into array
  let arr = string.split(" ");

  // remove non-vegetables from array
  let arrFiltered = arr.filter((veg) => {
    if (filter.indexOf(veg) != -1) return veg;
  });

  // count vegetables
  let arrCount = arrFiltered.reduce((count, veg) => {
    if (!count[veg]) {
      count[veg] = 0;
    }
    count[veg]++;
    return count;
  }, {});

  let array = obj2Arr(arrCount);
  let arraySorted = sortArrDesc(array)
  return arraySorted;
}

// convert object to array of array
function obj2Arr(obj) {
  // initialise empty array
  let result = [];

  // iterate through object
  for (const key in obj) {
    // parse key-value pairs as array
    let arr = [obj[key], key];

    // push into final array
    result.push(arr);
  }
  return result;
}

// sort array in descending order
function sortArrDesc(arr) {
  return arr.sort((a, b) => {
    if (a[0] == b[0]) {
      return b[1].localeCompare(a[1]);
    }
    return b[0] - a[0];
  });
}

// Tests
let s1 = "potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage";

let s2 = `mushroom chopsticks chopsticks turnip mushroom carrot mushroom cabbage mushroom carrot tofu pepper cabbage potato cucumber 
mushroom mushroom mushroom potato turnip chopsticks cabbage celery celery turnip pepper chopsticks potato potato onion cabbage cucumber
onion pepper onion cabbage potato tofu carrot cabbage cabbage turnip mushroom cabbage cabbage cucumber cabbage chopsticks turnip pepper
onion pepper onion mushroom turnip carrot carrot tofu onion tofu chopsticks chopsticks chopsticks mushroom cucumber chopsticks carrot
potato cabbage cabbage carrot mushroom chopsticks mushroom celery turnip onion carrot turnip cucumber carrot potato mushroom turnip 
mushroom cabbage tofu turnip turnip turnip mushroom tofu potato pepper turnip potato turnip celery carrot turnip`;

let one = countVegetables(s1);
let two = countVegetables(s2);

console.log(one);
console.log(two);
