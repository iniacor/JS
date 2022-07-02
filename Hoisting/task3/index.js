// put your code here
// export const createArrayOfFunctions = function (num = 0) {
//   if (typeof num !== 'number') {
//     return null;
//   }
//   const arr = Array(num)
//     .fill()
//     .map(
//       (el, index) =>
//         function () {
//           return index;
//         }
//     );
//   return arr;
// };

// console.log(createArrayOfFunctions(9)[5]());

// export const createArrayOfFunctions = function (num = 0) {
//   if (typeof num !== 'number') {
//     return null;
//   }
//   return [...Array(num)].map((el) => (el = num * 4));
// };

// console.log(createArrayOfFunctions(9));

// input number
// output number
// --algo
// 1 создать фабрику функций
// 2 Создаем замыкание функции
// 2.1 замыкание должно формировать массив заданной длины (метод fill например)+++
// 2.2 создаем переменну arr (массив)+++
// 2.3 проходимся map по новому массиву возвращая на каждом шагу функцию+++
// 2.4 функция возвращает свой индекс в массиве
