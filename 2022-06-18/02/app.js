function firstNonRepeated(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return s[i];
    }
  }
  return null;
}

function firstNonRepeated2(s) {
  let store = {};

  // Loop over the string and add elements along with the number of occurences to store
  for (let i = 0; i < s.length; i++) {
    if (!store[s[i]]) {
      store[s[i]] = 0;
    }
    if (store[s[i]] > 0) {
    }
    store[s[i]]++;
  }

  // Save all entries of store as an array
  let entries = Object.entries(store);

  // Sort the array in ascending order
  let entriesSorted = entries.sort((a, b) => a[1] - b[1]);

  // return the first (single occuring) element in the array
  if (entriesSorted[0][1] == 1) {
    return entriesSorted[0][0];
  } else {
    return null;
  }
}

// Test cases
console.log(firstNonRepeated("test"));
console.log(firstNonRepeated("teeter"));
console.log(firstNonRepeated("1122321235121222"));
console.log(firstNonRepeated("rend"));
console.log(firstNonRepeated("mouoknltuqrvlqtsrnpviskmp"));
console.log(firstNonRepeated("kgjjcrlrmipmpkhqiooqhlngn"));
console.log(firstNonRepeated("pqhrijrkloknpqlpnijhmmo"));
