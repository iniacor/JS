/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

export const makePromise = (num) => {
  return Promise.resolve(num);
};

// test Data
// makePromise(17).then((number) => {
//   console.log(number); // 17
// });
