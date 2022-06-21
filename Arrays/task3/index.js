'use strict';

/**
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */
function getSpecialNumbers(from, to) {
  let specialNumbers = [];
  for (let num = from; num <= to; num++) {
    if (num % 3 === 0) {
      specialNumbers.push(num);
    }
  }
  return specialNumbers;
}

console.log(getSpecialNumbers(1, 10));
// examples
// getSpecialNumbers(1, 10); // ==> [3, 6, 9]
// getSpecialNumbers(-10, 10); // ==> [-9, -6, -3, 0, 3, 6, 9]
// getSpecialNumbers(1, 2); // ==> [ ]
