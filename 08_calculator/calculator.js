const add = function (number1, number2) {
  return number1 + number2;
};

const subtract = function (number1, number2) {
  return number1 - number2;
};

const sum = function (numberArray) {
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++) {
    sum += numberArray[i];
  }
  return sum;
};

const multiply = function (numberArray) {
  let product = 1;
  for (let i = 0; i < numberArray.length; i++) {
    product *= numberArray[i];
  }
  return product;
};

const power = function (number, power) {
  return number ** power;
};

const factorial = function (number) {
  let product = 1;
  for (let i = 2; i <= number; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
