const removeFromArray = function(array, ...args) {
    const final = [];
    array.forEach(element => {
        if (!args.includes(element)) {
            final.push(element);
        }
    });
    return final;
};

// Do not edit below this line
module.exports = removeFromArray;
