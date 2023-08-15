const add = function(num1, num2) {
  return (num1) + (num2);
};

const subtract = function(num1, num2) {
  return (num1) - (num2)
};

const sum = function(args) {
  let nums = args
  return nums.reduce((total, item) => {return total += item}, 0)
};

const multiply = function(args) {
  let nums = args
  return nums.reduce((total, item) => {return total *= item}, 1)
};

const power = function(num1, num2) {
	return (num1) ** (num2)
};

const factorial = function(num1) {
	let fact = 1;
  for(let i = num1; i > 0; i--) {
    fact *= i;
  }
  return fact
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
