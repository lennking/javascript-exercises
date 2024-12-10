const repeatString = function(input, j) {
    let output = "";
    if (j < 0) {
        return 'ERROR';
    }
    for (let i=0; i < j; i++) {
        output += input;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
