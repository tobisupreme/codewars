function rakeGarden(garden) {
  var rakedGarden = garden.split(" ").map((inGarden) => {
    if (inGarden.toLowerCase() != "rock" && inGarden.toLowerCase() != "gravel") {
      return "gravel";
    } else {
      return inGarden;
    }
  });
  return rakedGarden.join(" ");
}

// Test cases
let garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel';
let garden2 = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'

let test1 = rakeGarden(garden);
console.table(test1);
let test2 = rakeGarden(garden2);
console.table(test2);
