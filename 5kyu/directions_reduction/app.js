"use strict";
/*
PREP:
Parameters:
This function takes in a comma-separated string

Returns:
This function returns an array

Example:
See readme.md for example

Pseudocode:
// Function takes in an input
  // Initialise an object with zoo animals and what they can eat
  // Initialise array to return
  // Add input string to return array
  // Split comma-separated string into array
  // Loop through array
    // For every animal
      // If animal on the left is included in the foods that the current animal can eat
        // Push "animal eats animal on the left" to return array
        // remove that animal from the array
        // Start the iteration from the first element in the array
      // If animal on the right is included in the foods that the current animal can eat
        // Push "animal eats animal on the right" to return array
        // remove that animal from the array
        // Start the iteration from the first element in the array
  // Convert array to string and push to return array
  // Return return array
    
*/

// Initialise an object with zoo animals and what they can eat
let zooInventoryArr = ["antelope eats grass", "big-fish eats little-fish", "bug eats leaves", "bear eats big-fish", "bear eats bug", "bear eats chicken", "bear eats cow", "bear eats leaves", "bear eats sheep", "chicken eats bug", "cow eats grass", "fox eats chicken", "fox eats sheep", "giraffe eats leaves", "lion eats antelope", "lion eats cow", "panda eats leaves", "sheep eats grass"];
let zooInventoryObj = zooInventoryArr.reduce((obj, element) => {
  let animalFood = element.split(" eats ");
  let animal = animalFood[0];
  let food = animalFood[1];

  if (!obj[animal]) {
    obj[animal] = [];
  }
  obj[animal].push(food);

  return obj;
}, {});

function whoEatsWho(zoo) {
  let output = [zoo];
  let zooAnimals = zoo.split(",");

  start: for (let i = 0; i < zooAnimals.length; i++) {
    let nextAnimal = zooAnimals[i + 1] || null;
    let prevAnimal = zooAnimals[i - 1] || null;

    //  Get food of current animal
    let food = zooInventoryObj[zooAnimals[i]] || null;

    // Check left
    let checkLeft = checkDiet(prevAnimal, food);
    // Check right
    let checkRight = checkDiet(nextAnimal, food);

    if (checkLeft === true) {
      output.push(`${zooAnimals[i]} eats ${zooAnimals[i - 1]}`);
      zooAnimals.splice(i - 1, 1);
      i = -1;
      continue start;
    } else if (checkRight === true) {
      output.push(`${zooAnimals[i]} eats ${zooAnimals[i + 1]}`);
      zooAnimals.splice(i + 1, 1);
      i = -1;
      continue start;
    }
  }

  let zooAnimalsStr = zooAnimals.join(",");
  output.push(zooAnimalsStr);

  function checkDiet(animal, food) {
    if (food == null || animal == null) {
      return null;
    }
    if (food.indexOf(animal) != -1) {
      return true;
    }
    return false;
  }

  return output;
}

// Test cases
let input1 = "fox,bug,chicken,grass,sheep";
let result1 = whoEatsWho(input1);
console.log(result1);
