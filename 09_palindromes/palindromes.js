const palindromes = function (input) {
    input = input.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
    input = input.replace(/\s+/g, '');
    input = input.toLowerCase();
    let j = 0;
    for (let i=0; i<input.length; i++) {
        if (input[i]===input[input.length-i-1]){
            j++;
            continue;
        }
        break;
    }
    if (j==input.length) {
        return true;
    }
    return false;
  
};

// Do not edit below this line
module.exports = palindromes;
