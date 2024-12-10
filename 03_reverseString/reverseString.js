const reverseString = function(input) {
    const reversed = [];
    //length = input.length();
    for (let i=input.length; i>0; i--) {
        reversed.push(input[i-1]);
    }
    return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
