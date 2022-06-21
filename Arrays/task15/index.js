'use strict';

/**
 * @param {number[]} arr
 * @param {number} num
 * @return {boolean}
 */
const includes = (arr, num) => {
  for (let i of arr) {
    if (num in arr) {
      return true;
    } else {
      return false;
    }
  }
};

// const includes = (arr, num) => {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === num) {
//       return true;
//     }
//     continue;
//   }
//   return false;
// };
console.log(includes([1, 4, 8, 3], 3));
console.log(includes([1, 4, 8, 3], 5));
console.log(includes([1, 4, 8, 3], 9));
console.log(includes([1, 4, 8, 3], 1));
console.log(includes([1, 4, 8, 3], 8));

// // examples
// includes([1, 4, 8, 3], 3); // ==> true
// includes([1, 4, 8, 3], 5); // ==> false
