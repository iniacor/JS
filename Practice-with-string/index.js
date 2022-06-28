//Калькулятор
// const calc = (exprecion) => {
//   let [a, operator, b] = exprecion.split(' ');
//   let result;

//   switch (operator) {
//     case '+':
//       result = Number(a) + +b;
//       break;
//     case '-':
//       result = a - b;
//       break;
//     case '*':
//       result = a * b;
//       break;
//     case '/':
//       result = a / b;
//   }
//   return `${exprecion} = ${result}`;
// };

// console.log(calc('6 * 2'));

// Переворачиваем строку
// const reverseString = (str) => {
//   if (typeof str !== typeof '') {
//     return null;
//   }
//   let result = str.split('').reverse().join('');
//   return result;
// };

//Сокращенная версия
// const reverseString = (str) =>
//   typeof str !== typeof '' ? null : str.split('').reverse().join('');
// console.log(reverseString('abcdefg'));

//Очистка данных о транзакциях
// const arr = [' 32 dollars ', '  1.923', '16.457', 17, ' 1 dollar '];
// const cleanTransactionsList = (arr) =>
//   arr.reduce((acc, el) => {
//     const number = Number(el);
//     if (!isNaN(number)) {
//       acc.push(`$${number.toFixed(2)}`);
//     }
//     return acc;
//   }, []);

// console.log(cleanTransactionsList(arr));
//1. проходимся по массиву через reduce
//2. приводим елемент к числу
//3. Если елемент не NaN, то пушаем элемент в аккумулятор в темплейт стринг отсекая 2 знака после запятой
