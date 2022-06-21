// split string into array
// check each character for uppercase value
// add space as prefix if true
// join and return

function solution(string) {
    // the split
    let step1 = string.split("");
    // the check and return
    for (let i = 0; i < step1.length; i++) {
        if (step1[i] === step1[i].toUpperCase()) {
            step1[i] = ` ${step1[i]}`;
        }
    }
    // returning the joint
    return step1.join("");
    // return step1.join("");
}
