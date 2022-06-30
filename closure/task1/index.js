export const makeCounter = () => {
  let counter = 0;
  return function () {
    return counter++;
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
console.log(counter2());
// 1 Создать функцию для создания независимых счетчиков
// 2 Функция внутри функции
// 3 Создаем функцию которая внутри возвращает функцию с необходимым нам функционалом
// 4 Тестируем
// 5 Рефакторинг
