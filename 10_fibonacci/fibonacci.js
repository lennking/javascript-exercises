const fibonacci = function(max) {
    if (max < 0) {
        return "OOPS";
    }
    max = max.toString();
    let i = 0;
    let temp1 = 1;
    let temp2 = 0;
    let solution = 0;
    while (i < max) {
        solution = temp1 + temp2;
        temp1=temp2;
        temp2=solution;
        i++;
    }
    return solution;
};

// Do not edit below this line
module.exports = fibonacci;
