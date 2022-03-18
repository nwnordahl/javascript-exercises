const repeatString = function (stringToBeRepeated, repeatAmount) {
  if (repeatAmount < 0) {
    return "ERROR";
  }

  let repeatedString = "";
  for (let i = 0; i < repeatAmount; i++) {
    repeatedString += stringToBeRepeated;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
