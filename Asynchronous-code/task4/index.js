const sum = (arg1, arg2) => {
  return arg1 * arg2;
};
const delay = (delay, callback, context, ...args) => {
  setTimeout(() => {}, delay);
};

delay(1000, sum);
