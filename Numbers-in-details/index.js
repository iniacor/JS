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
