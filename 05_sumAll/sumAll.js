const sumAll = function(arg1, arg2) {
    if (arg1<0 || arg2 <0 || !Number.isInteger(arg1) || !Number.isInteger(arg2)) {
        return "ERROR";
    }
    if (arg2 > arg1) {
        difference = arg2-arg1;
        small = arg1;
    } else {
        difference = arg1-arg2;
        small = arg2;
    }
    difference++;
    sum = 0;
    for (let i=0; i<difference; i++) {
        sum += (small + i);
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
