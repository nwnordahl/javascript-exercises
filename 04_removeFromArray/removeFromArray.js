const removeFromArray = function (array, ...itemArguments) {
  itemArguments.forEach((elementRemove) => {
    array = array.filter((element) => element !== elementRemove);
  });
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
