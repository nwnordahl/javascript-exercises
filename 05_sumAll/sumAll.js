const sumAll = function (floor, ceiling) {
  if (
    floor < 0 ||
    ceiling < 0 ||
    typeof floor !== "number" ||
    typeof ceiling !== "number"
  ) {
    return "ERROR";
  }

  // If the biggest number is the first argument
  if (floor > ceiling) {
    const tempFloor = floor;
    floor = ceiling;
    ceiling = tempFloor;
  }

  let sum = 0;
  for (let i = floor; i < ceiling + 1; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
