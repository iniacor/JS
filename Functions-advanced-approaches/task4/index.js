// const add2 = (num) => num + 2;
// const square = (num) => num * num;
// const half = (num) => num / 2;

export const compose =
  (...funcs) =>
  (value) => {
    return funcs.reduce((acc, func) => func(acc), value);
  };

// --test Data
// const superFunc = compose(add2, square, half);
// console.log(superFunc(2)); // => 8
