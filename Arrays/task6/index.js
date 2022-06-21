'use strict';

function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let copyArr = arr.slice();
  let squaredArray = [];
  for (let num of copyArr) {
    squaredArray.push(num * num);
  }
  return squaredArray;
}
console.log(squareArray([1, 10, 9, 11]));

// examples
// squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
// squareArray([10, 0, -4]); // ==> [100, 0, 16]
// squareArray([1]); // ==> [1]
