export const createCalculator = () => {
  let memory = 0;
  return {
    add: function (num) {
      return (memory += num);
    },
    decrease: function (num) {
      return (memory -= num);
    },
    reset: function () {
      return (memory = 0);
    },
    getMemo: function () {
      return memory;
    },
  };
};

//--algo
// 1  Создать конструктор калькуляторов с памятью
// 2  Создаем функцию которая будет конструктором для создания функций калькуляторов
// 3  Основная функция конструктор возвращает функции выполняющие арифмет.операции
// 4  Тестируем
// 5  Рефакторинг
