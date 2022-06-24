/* 
// PREP:
// Paramaeters:
    This function takes in a number

// Returns:
    This function returns an array of numbers

// Example:
    input of 1 returns [1,15,15]
    input of 2 returns [2,24,24]
    input of 10 returns [10,56,64]
 
// Pseudocode:
    for i = 1 through 1 = humanYears
        if i is 1
            increase catYears by 15
            increase dogYears by 15
        if i is 2
            increasse catYears by 9
            increase dogYears by 9
        else 
            increase catYears by 4
            increase dogYears by 5
    return [humanYears, catYears, dogYears];
*/

var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = 0,
        dogYears = 0;
    for (let i = 1; i <= humanYears; i++) {
        if (i === 1) {
            catYears += 15;
            dogYears += 15;
        } else if (i === 2) {
            catYears += 9;
            dogYears += 9;
        } else {
            catYears += 4;
            dogYears += 5;
        }
    }
    return [humanYears, catYears, dogYears];
};
