let memory = 0;
export const add = function (num) {
  return (memory += num);
};

export const decrease = function (num) {
  return (memory -= num);
};

export const reset = function () {
  return (memory = 0);
};

export const getMemo = function () {
  return memory;
};
