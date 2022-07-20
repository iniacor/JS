const getValueWithDelay = (number, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, delay);
  });

const asyncNum1 = getValueWithDelay(5, 500);
const asyncNum2 = getValueWithDelay(35, 1500);
const asyncNum3 = getValueWithDelay(40, 2500);
const asyncNum4 = Promise.reject(new Error('error'));

// const promise1 = Promise.resolve(17);
// const rejectedPromise = Promise.reject(new Error('error'));
const getSum = (numbers) =>
  numbers
    .filter((value) => !isNaN(value))
    .reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then((numbers) => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};

// test Data
asyncSum(asyncNum1, asyncNum2, asyncNum3, asyncNum4)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
