/* PREP:
Parameters:
This function takes in a number

Returns:
This function returns a number

Example:
input of 4 returns 3 (1, 2, 4)
input of 5 returns 2 (1, 5)
input of 12 returns 6 (1, 2, 3, 4, 6, 12)
input of 30 returns 8 (1, 2, 3, 5, 6, 10, 15, 30)

Pseudocode:
// Declare variable count
// From i = 1 to i = n
    // If n % i == 0, increase count
// Return count
*/

function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}

// Test cases
getDivisorsCnt(1); // 1
getDivisorsCnt(10); // 4
getDivisorsCnt(11); // 2
getDivisorsCnt(54); // 8
