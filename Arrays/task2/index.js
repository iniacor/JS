'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
// function getSum(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let sum = 0;
//   for (let num = 0; num < arr.length; num++) {
//     sum += arr[num];
//   }
//   return sum;
// }
// console.log(getSum([1, 10, -10, 4]));

function getSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log(getSum([1, 10, -10, 4]));

// examples
// getSum([1, 10, -10, 4]); // ==> 5
// getSum([1]); // ==> 1
// getSum([-8, 8]); // ==> 0
// getSum(10, 12, 14); // ==> null
