// Pete, the baker
// https://www.codewars.com/kata/525c65e51bf619685c000059/

function cakes(recipe, available) {
  let count = [];
  for (ingredient in recipe) {
    // check that all keys in recipe are present in available, else return 0
    if (!available[ingredient]) return 0;
    // find how many times we can make the recipe with available ingredients
    count.push(Math.floor(available[ingredient] / recipe[ingredient]));
  }

  // return the least number
  return Math.min.apply(null, count);
}

// Test case 1
let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
// must return 2
console.log(cakes(recipe, available));

// Test case 2
let recipe2 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
let available2 = { sugar: 500, flour: 2000, milk: 2000 };
// must return 0
console.log(cakes(recipe2, available2));
