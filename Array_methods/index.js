// получение из массива чисел кратных 3 при помощи метода filter
// const getSpecialNumbers = (arr) => {
//   const result = arr.filter((num) => num % 3 === 0);
//   return result;
// };
// console.log(getSpecialNumbers([3, 6, 7, 9, 12, 14]));
// const getSpecialNumbers = (arr) => arr.filter((num) => num % 3 === 0);
// console.log(getSpecialNumbers([3, 6, 7, 9, 12, 14]));

// получение из массива чисел кратных 3 при помощи метода forEach
// const getSpecialNumbers = (arr) => {
//   let specialNumbers = [];
//   arr.forEach((num) => {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   });
//   return specialNumbers;
// };
// console.log(getSpecialNumbers([3, 6, 7, 9, 12, 14]));

// сортировка массива при помощи метода sort
// const sortDesc = (arr) => {
//   const sortResult = [...arr].sort((b, a) => a - b);
//   return sortResult;
// };
// console.log(sortDesc([1, 3, 2, 7, 4, 9]));
// const arr = [1, 3, 2, 7, 4, 9];
// const sortDesc = (arr) => [...arr].sort((b, a) => a - b);
// console.log(sortDesc(arr));
// console.log(arr);

// Делаем входящий двухмерный массив плоским при помощи метода flat и сортируем полученный массив по возрастанию с помощью метода sort
// const arr = [1, 2, 4, 3, [5, 1, 8, 6]];
// const flatArray = (arr) => {
//   const resultArray = arr.flat().sort((b, a) => b - a);
//   return resultArray;
// };
// const arr = [1, 2, 4, 3, [5, 1, 8, 6]];
// const flatArray = (arr) => arr.flat().sort((b, a) => b - a);
// console.log(flatArray(arr));
// console.log(arr);

// Делаем входящий двухмерный массив плоским при помощи метода reduce + concat и сортируем полученный массив по возрастанию с помощью метода sort
// const arr = [1, 2, 4, 3, [5, 1, 8, 6]];
// const flatArray = (arr) => {
//   const resultArray = arr
//     .reduce((acc, elem) => acc.concat(elem), [])
//     .sort((b, a) => b - a);
//   return resultArray;
// };
// console.log(flatArray(arr));
// console.log(arr);

//Фильтруем входящий массив (метод фильтр) на предмет вхождения имен второго входящео массива (метод  indexOf) и отправляем результат каждому из студентов в результирующем массиве с помощью метода map/
// const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest1 = ['John', 'Mike'];

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//   const passedStudent = allStudentsList.filter(
//     (name) => studentsForRetake.indexOf(name) === -1
//   );
//   return passedStudent.map((name) => `Good job, ${name}!`);
// };

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
//   allStudentsList
//     .filter((name) => studentsForRetake.indexOf(name) === -1)
//     .map((name) => `Good job, ${name}!`);

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) =>
//   allStudentsList
//     .filter((name) => !studentsForRetake.includes(name))
//     .map((name) => `Good job, ${name}`);
// console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1));

//Возвращаем новый массив с возведенными в квадрат числами из входящего массива. Метод map
// const squareArray = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.map((num) => num * num);
// };
// const squareArray = (arr) =>
//   Array.isArray(arr) ? arr.map((num) => num * num) : null;
// console.log(squareArray([2, 3, 5]));
// console.log(squareArray(2));

// Возврат зеркального массива без изменения текущего с помощью метода reverse()
// const reverseArray = (arr) => {
//   // проверяем является ли входящий аргумент массивом
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   //делаем копию входящего массива с помощью спреда и применяем к копии метод reverse()
//   let reverseArray = [...arr].reverse();
//   return reverseArray;
// };
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const arr2 = 3;
// const reverseArray = (arr) => (Array.isArray(arr) ? [...arr].reverse() : null);
// console.log(reverseArray(arr));
// console.log(reverseArray(arr2));
// console.log(arr);

//Фильтруем исходный массив на четные числа и с помощью .map() увеличиваем каждый элемент результирующего массива на значение аргумента delta
// const increaseEvenEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.filter((num) => num % 2 === 0).map((num) => num + delta);
// };
// const increaseEvenEl = (arr, delta) =>
//   Array.isArray(arr)
//     ? arr.filter((num) => num % 2 === 0).map((num) => num + delta)
//     : null;
// console.log(increaswEvenEl([2, 5, 8, 9, 12, 30], 20));

//клонируем входящий массив с помошью оператора spred [...arr]
// arr = [1, 2, 3, 4, 5];
// const cloneArr = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return [...arr];
// };
// const cloneArr = (arr) => (Array.isArray(arr) ? [...arr] : null);
// console.log(cloneArr(arr));
// console.log(arr);

//Withdraw.Снимаем деньги со счета определенного клиента и если его баланс меньше суммы в запросе то .выводим -1.,
//если баланса хватает, товыводим остаток баланса после снятия.
// const clients = ['Ann', 'John', 'User'];
// const balances = [1400, 87, -6];

// const withdraw = (clients, balances, client, amount) => {
//   const clientIndex = clients.indexOf(client);
//   if (balances[clientIndex] < amount) {
//     return -1;
//   }
//   return (balances[clientIndex] -= amount);
// };
// С использованием тернарного оператора
// const withdraw = (clients, balances, client, amount) =>
//   balances[clients.indexOf(client)] >= amount
//     ? (balances[clients.indexOf(client)] -= amount)
//     : -1;
// console.log(withdraw(clients, balances, 'John', 50));
// console.log(balances);
// console.log(withdraw(clients, balances, 'User', 10));
// console.log(balances);

// Используя метод .reduce() возвращаем сумму всех чисел в массиве
// const array = [1, 2, 3, 4, 5];
// const sum = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   let result = arr.reduce((acc, num) => {
//     return acc + num;
//   });
//   return result;
// };
//Сокращенная запись
// const sum = (arr) =>
//   Array.isArray(arr) ? arr.reduce((acc, num) => acc + num) : null;
// console.log(sum(array));

//Фильтруем входящий мссив arr на предмет наличие слов длиной больше 5 символов и содержащих в себе подстроку аргумента text
// const nameList = [
//   'John',
//   'Oliviya',
//   'Oleksander',
//   'Emanuel',
//   'Vanya',
//   'Nastya',
//   'Viya',
// ];
// const filterNames = (arr, text) => {
//   const filterNames = arr
//     .filter((name) => name.length > 5)
//     .filter((name) => name.includes(text));
//   return filterNames;
// };
//Сокращенная запись
// const filterNames = (arr, text) =>
//   arr.filter((name) => name.length > 5).filter((name) => name.includes(text));
// console.log(filterNames(nameList, 'ya'));

//Поиск среднего арифметического элементов массива
// const arrAverage = (arr) => {
//   let result = arr.reduce((acc, num) => {
//     return acc + num;
//   });
//   return result / arr.length;
// };
//Сокращенная запись
// const arrAverage = (arr) => arr.reduce((acc, num) => acc + num) / arr.length;
// console.log(arrAverage([2, 5, 6, 3]));

// const user = {
//   name: 'Tom',
//   key: 17,
// };
// for (let key in user) {
//   console.log(user[key]);
// }

const transformToObject = (arr) => {
  const newObject = {};
  arr.map((name) => (newObject[name] = name));
  return newObject;
};
console.log(transformToObject(['a', 17.1, 'John Doe']));
