'use strict';

const checkSum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum > 100;
};

console.log(checkSum([10, 10, 10]));
console.log(checkSum([10, 99, 1]));
console.log(checkSum([-6, -3, 200]));

// examples
// checkSum([10, 10, 10]); // ===> false
// checkSum([10, 99, 1]); // ===> true
// checkSum([-6, -3, 200]); // ===> true
