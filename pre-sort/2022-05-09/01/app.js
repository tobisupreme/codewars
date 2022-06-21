// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
    let xBuck = [],
        yBuck = [],
        zBuck = [];

    // for r
    xBuck = convertToHex(r);

    // for g
    yBuck = convertToHex(g);

    // for b
    zBuck = convertToHex(b);

    let returnArr = zBuck.concat(yBuck).concat(xBuck);
    return returnArr
        .reverse()
        .map((item) => {
            if (item === 15) {
                return "F";
            } else if (item === 14) {
                return "E";
            } else if (item === 13) {
                return "D";
            } else if (item === 12) {
                return "C";
            } else if (item === 11) {
                return "B";
            } else if (item === 10) {
                return "A";
            } else {
                return item;
            }
        })
        .join("");
}

function convertToHex(param) {
    let returnValue = [];

    if (param < 0) {
        returnValue.push("00");
    } else if (param > 255) {
        returnValue.push("FF");
    } else {
        while (param > -1) {
            returnValue.push(param % 16);
            param = Math.floor(param / 16);
            if (Math.floor(param / 16) < 16) {
                returnValue.push(param % 16);
                break;
            }
        }
    }

    return returnValue;
}
