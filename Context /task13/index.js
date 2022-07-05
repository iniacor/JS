// export const sumOfSquares = () =>
//   [].reduce.call(...arguments, (acc, num) => acc + num * num, 0);
// console.log(sumOfSquares(2, 3, 4));

export function sumOfSquares() {
  return [...arguments].reduce((acc, num) => acc + num * num, 0);
}

// --test data
// console.log(sumOfSquares(2, 3, 4));
// console.log(sumOfSquares(-2, 3, 40000000));
