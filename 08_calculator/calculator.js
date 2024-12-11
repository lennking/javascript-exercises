const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
  solution = 0;
	for (let i=0; i < array.length; i++) {
    solution += array[i];
  }
  return solution;
};

const multiply = function(array) {
  solution = array[0];
	for (let i=1; i < array.length; i++) {
    solution *= array[i];
  }
  return solution;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(input) {
	solution = 1;
  for (let i = input; i > 0; i--) {
    solution = solution * i;
  }
  return solution;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
