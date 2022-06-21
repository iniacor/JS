'use strict';
function swap(numbers) {
  const [start, ...swapArr] = numbers;
  return [...swapArr, start];
}
console.log(swap([1, 10, 9, 11]));

function swapManual(numbers) {
  let copyArr = numbers.slice();
  let firstIndex = copyArr.shift();
  copyArr.push(firstIndex);
  return copyArr;
}
console.log(swapManual([1, 10, 9, 11]));

// // examples
// swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
// swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
