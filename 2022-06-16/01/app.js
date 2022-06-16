function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) != -1) {
      vowelsCount++
    }
  }

  return vowelsCount;
}


// Test cases
let test1 = getCount('abracadabra');
console.log(test1);
