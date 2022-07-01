'use strict';
export const createLogger = () => {
  const memory = [];
  return {
    warn: function (message) {
      memory.unshift({ message, dateTime: new Date(), type: 'warn' });
    },
    error: function (message) {
      memory.unshift({ message, dateTime: new Date(), type: 'error' });
    },
    log: function (message) {
      memory.unshift({ message, dateTime: new Date(), type: 'log' });
    },
    getRecords: function (type) {
      if (type) {
        return memory
          .filter((el) => el.type === type)
          .sort((a, b) => b.dateTime - a.dateTime);
      } else return memory.sort((a, b) => b.dateTime - a.dateTime);
    },
  };
};

// examples;
// const logger1 = createLogger();
// logger1.log('User logged in');
// logger1.log('User test 2');
// logger1.log('User test 3');
// logger1.log('User test 4');
// logger1.warn('User is tring to enter restricted page');
// logger1.log('User logged out');
// logger1.error('Unexpected error on the site');

// console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// console.log(logger1.getRecords('log')); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// console.log(logger1.getRecords('error')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
// console.log(logger1.getRecords('warn')); // ===> [{ message: 'User is tring to enter restricted page', type: 'warn', dateTime: Date }]

// const logger2 = createLogger();
// logger2.warn('Opps, something is happenning');
// console.log(logger2.getRecords('error')); // ===> []
// console.log(logger2.getRecords('warn')); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
// console.log(logger2.getRecords()); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

// const logger3 = createLogger();
// console.log(logger3.getRecords('error')); // ===> []
// console.log(logger3.getRecords()); // ===> []

//--algo
// 1  Написать функцию для создания логгеров
// 2  Реализовать внутри главной функции функции в виде методов ( warn,error,log,getRecords)
// 2.1 Создаем переменные для хранения временных данных memory
// 2.2 Реализуем методы функции
// 3  Тестируем
// 4  Рефакторинг
