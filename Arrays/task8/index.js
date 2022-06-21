'use strict';

/**
 * @param {number[]} arr
 * @param {number} delta
 * @return {number[]}
 */

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copyArr = arr.slice();
  for (let num = 0; num < copyArr.length; num++) {
    if (copyArr[num] % 2 === 0) {
      copyArr[num] += delta;
    }
  }
  return copyArr;
};
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
console.log(increaseEvenEl([7, 11, 1], 10));
console.log(increaseEvenEl([], 120));

// examples
// increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
// increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
// increaseEvenEl([], 120); // ===> []
