' use strict ';

// --algo
// 1 функция которая будет запоминать историю вызовов входящей функции
// 2 Создаем функцию saveFuncCalls принимающую в аргументе функцию и возвращающую функцию
// 3 возвращаемая функция withMemory повторяет функционал входящей функции func
// 3.1 у withMemory есть свойство callsHistory: [массив вызовов] в которое сохраняетя каждый вызов как массив аргументов (...args)

/**
//  * @param {function} func
//  * @return {function}
 */
// input - function
// output - function
// function saveFuncCalls(func) {
//   // input - any arguments
//   // output - ???
//   const callMemory = [];
//   return function withMemory(...args) {
//     callMemory.push([...args]);
//     withMemory.callsHistory = callMemory;
//     return func.call(this, ...args);
//   };
// }

// example 1
// function sum(firstNum, secondNum) {
//   return firstNum + secondNum;
// }

// const sumWithMemory = saveFuncCalls(sum);
// console.log(sumWithMemory(4, 2)); // ===> 6
// console.log(sumWithMemory(9, 1)); // ===> 10

// console.log(sumWithMemory.callsHistory); // ===> [ [4, 2], [9, 1] ]

// // example 2
// function addDelta(array, delta) {
//   return array.map((el) => el + delta);
// }

// const addDeltaWithMemory = saveFuncCalls(addDelta);
// addDeltaWithMemory([111, 22, 55, 4], 8); // ===> [119, 30, 63, 12]
// addDeltaWithMemory([9, 1, -8, 15, 7, 0], 7); // ===> [16, 8, -1, 22, 14, 7]

// console.log(addDeltaWithMemory.callsHistory); // ===> [ [[111, 22, 55, 4], 8], [[9, 1, -8, 15, 7, 0], 7] ]

// // example 3
// const user = {
//   name: 'John',
//   sayHi() {
//     return this.name;
//   },
// };

// const sayHiWithMemory = saveFuncCalls(user.sayHi);
// // sayHiWithMemory(); // ===> throw error // because sayHiWithMemory lost context
// const sayHiWithMemoryBinded = sayHiWithMemory.bind({ name: 'Tom' });
// console.log(sayHiWithMemoryBinded()); // ===> Tom // because we fixed context with bind and run functon again

// console.log(sayHiWithMemory.callsHistory); // [ [] ]
