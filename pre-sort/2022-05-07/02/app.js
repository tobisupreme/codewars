// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    let strArr = Array.from(str);
    if (strArr.length % 2 !== 0) {
        strArr.push("_");
    }

    let arrayOfSplit = [];
    for (let i = 0; i < strArr.length; i = i + 2) {
        let dummyStr = strArr[i] + strArr[i + 1];
        arrayOfSplit.push(dummyStr);
    }

    return arrayOfSplit;
}
