//First task
// const arr = [1, 4.1, 5, 'three', undefined, NaN, null, 8, '34'];
// //не пытается привести значение к числу
// const getFiniteNumbers = (arr) =>
//   arr.map((num) => num).filter((num) => Number.isFinite(num)); //=>[1, 4.1, 5, 8]
// // пытается привести значение к числу
// const getFiniteNumbersV2 = (arr) =>
//   arr.map((num) => num).filter((num) => isFinite(num)); //=>[1, 4.1, 5, null, 8, '34']

// //Возвращаем только значение NaN
// const getNaN = (arr) =>
//   arr.map((num) => num).filter((num) => Number.isNaN(num)); //=>[NaN]

// //Возвращаем  значение NaN и то что не является числом
// const getNaNV2 = (arr) => arr.map((num) => num).filter((num) => isNaN(num)); //=> ['three', undefined, NaN]

// //Возвращаем все что являетя целым числом. Не пытается привести к числу
// const getIntegers = (arr) =>
//   arr.map((num) => num).filter((num) => Number.isInteger(num)); //=> [1, 5, 8]

// console.log(getIntegers(arr));
// console.log(getFiniteNumbers(arr) === getFiniteNumbersV2(arr)); //=> false
// console.log(getNaN(arr) === getNaNV2(arr)); //=> false

//  Применяем методы Number.parseInt(),parseInt(),Number.parseFloat(),parseFloat()
// const arr = [
//   1.214,
//   4.1,
//   5,
//   'three',
//   undefined,
//   NaN,
//   null,
//   8,
//   '34',
//   0.45,
//   66.7543,
// ];
// const getParsedIntegers = (arr) => arr.map((num) => Number.parseInt(num)); //[1, 4, 5, NaN, NaN, NaN, NaN, 8, 34, 0, 66]

// const getParsedIntegersV2 = (arr) => arr.map((num) => parseInt(num)); //[1, 4, 5, NaN, NaN, NaN, NaN, 8, 34, 0, 66]

// const getParsedFloats = (arr) => arr.map((num) => Number.parseFloat(num)); //[1.214, 4.1, 5, NaN, NaN, NaN, NaN, 8, 34, 0.45, 66.7543]

// const getParsedFloatsV2 = (arr) => arr.map((num) => parseFloat(num)); //[1.214, 4.1, 5, NaN, NaN, NaN, NaN, 8, 34, 0.45, 66.7543]

// console.log(getParsedIntegers(arr));
// console.log(getParsedIntegersV2(arr));
// console.log(getParsedFloats(arr));
// console.log(getParsedFloatsV2(arr));
// console.log(getParsedIntegers(arr) === getParsedIntegersV2(arr));
// console.log(getParsedFloats(arr) === getParsedFloatsV2(arr));
//Округляем число до 2-х знаков после запятой
// const multiRound = (num) => [
//   Math.floor(num * 100) / 100,
//   Math.trunc(num * 100) / 100,
//   Math.ceil(num * 100) / 100,
//   Math.round(num * 100) / 100,
//   Number(num.toFixed(2)),
// ];
// // examples
// console.log(multiRound(11.12556));
// console.log(multiRound(6.112));
// multiRound(11.12556); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// multiRound(6.112); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]
//Получаем максимальное число из массива плюс по модулю
const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let result = arr.map((num) => Math.abs(num));
  return Math.max(...result);
};
// examples
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
