const reverseString = function (string) {
  const stringCharactersArray = string.split("");
  const arrayLength = stringCharactersArray.length;

  let stringReversed = "";
  for (let i = 1; i <= arrayLength; i++) {
    stringReversed += stringCharactersArray[arrayLength - i];
  }

  return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
