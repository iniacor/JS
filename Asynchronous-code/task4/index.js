const sum = (arg1, arg2) => {
  return arg1 * arg2;
};
export const delay = (delay, callback, context, ...args) => {
  setTimeout(() => {
    console.log(callback.apply(context, args));
  }, delay);
};
delay(2000, sum, delay, 2, 2);
