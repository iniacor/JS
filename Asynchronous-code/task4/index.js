// const sum = (arg1, arg2) => {
//   return arg1 * arg2;
// };
export const delay = (delay, callback, context, ...args) => {
  setTimeout(() => {
    callback.apply(context, args);
  }, delay);
};
// console.log(delay(2000, sum, null, 2, 2));
