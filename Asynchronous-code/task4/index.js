// const sum = (arg1, arg2) => {
//   return arg1 * arg2;
// };
export const delay = (delay, callback, context, ...args) => {
  setTimeout(() => {
    callback.call(context, ...args);
  }, delay);
};

// delay(1000, sum, this, 2, 2);
