// algo
// 1 Функция должна проводить операции с входной датой
// 2 Пишем функцию shmoment
// 3 Функция принимает начальное value возвращает объект с набором методов
// 4 метод  result должен вернуть дату после всех преобразования
// 5 методы add(string,num), substruct(string,num), result()
// 5 используем чейнинг
// 7 используем условное ветвление

// ======= work variant ===================
// export function shmoment(initValue) {
//   let newDataValue = new Date(initValue);
//   const formatter = new Intl.DateTimeFormat('en', {
//     month: 'short',
//     day: 'numeric',
//     year: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     hour12: false,
//   });
//   const calculateDate = {
//     add(interval, value) {
//       switch (String(interval).toLowerCase()) {
//         case 'years':
//           newDataValue.setFullYear(newDataValue.getFullYear() + value);
//           return this;
//         case 'months':
//           newDataValue.setMonth(newDataValue.getMonth() + value);
//           return this;
//         case 'days':
//           newDataValue.setDate(newDataValue.getDate() + value);
//           return this;
//         case 'hours':
//           newDataValue.setHours(newDataValue.getHours() + value);
//           return this;
//         case 'minutes':
//           newDataValue.setMinutes(newDataValue.getMinutes() + value);
//           return this;
//         case 'seconds':
//           newDataValue.setSeconds(newDataValue.getSeconds() + value);
//           return this;
//         case 'milliseconds':
//           newDataValue.setMilliseconds(newDataValue.getMilliseconds() + value);
//           return this;
//         default:
//           newDataValue = undefined;
//           break;
//       }
//       return newDataValue;
//     },
//     subtract(interval, value) {
//       switch (String(interval).toLowerCase()) {
//         case 'years':
//           newDataValue.setFullYear(newDataValue.getFullYear() - value);
//           return this;
//         case 'months':
//           newDataValue.setMonth(newDataValue.getMonth() - value);
//           return this;
//         case 'days':
//           newDataValue.setDate(newDataValue.getDate() - value);
//           return this;
//         case 'hours':
//           newDataValue.setHours(newDataValue.getHours() - value);
//           return this;
//         case 'minutes':
//           newDataValue.setMinutes(newDataValue.getMinutes() - value);
//           return this;
//         case 'seconds':
//           newDataValue.setSeconds(newDataValue.getSeconds() - value);
//           return this;
//         case 'milliseconds':
//           newDataValue.setMilliseconds(newDataValue.getMilliseconds() - value);
//           return this;
//         default:
//           newDataValue = undefined;
//           break;
//       }
//       return newDataValue;
//     },
//     result() {
//       return newDataValue;
//     },
//   };
//   return calculateDate;
// }

// const result = shmoment(new Date(2020, 0, 7, 17, 17, 17))
//   .add('minutes', 2)
//   .add('days', 8)
//   .subtract('years', 1)
//   .result();

// console.log(result); // => .. Jan 15 2019 17:19:17 ...

// const result2 = shmoment(new Date(2020, 0, 7, 17, 17, 17, 155))
//   .add('minutes', 2)
//   .add('years', 8)
//   .add('days', 1)
//   .add('hours', 1)
//   .subtract('years', 1)
//   .add('milliseconds', 444)
//   .subtract('milliseconds', 44)
//   .result();
// console.log(result2);// => Jan 8, 2027, 18:19:17

//  ================ refactoring =============

const intervalName = {
  years: 'setYears',
  months: 'setMonths',
  days: 'setDays',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

export function shmoment(initValue) {
  const newDataValue = new Date(initValue);

  // const setting = (setInterval, getInterval, value) => {
  //   return newDataValue.setInterval(newDataValue.getInterval() + value);
  // };

  const dateSet = {
    setYears(value) {
      return newDataValue.setFullYear(newDataValue.getFullYear() + value);
    },
    setMonths(value) {
      return newDataValue.setMonth(newDataValue.getMonth() + value);
    },
    setDays(value) {
      return newDataValue.setDate(newDataValue.getDate() + value);
    },
    setHours(value) {
      return newDataValue.setHours(newDataValue.getHours() + value);
    },
    setMinutes(value) {
      return newDataValue.setMinutes(newDataValue.getMinutes() + value);
    },
    setSeconds(value) {
      return newDataValue.setSeconds(newDataValue.getSeconds() + value);
    },
    setMilliseconds(value) {
      return newDataValue.setMilliseconds(
        newDataValue.getMilliseconds() + value
      );
    },
  };
  const formatter = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  const calculateDate = {
    add(interval, value) {
      dateSet[intervalName[interval]](value);
      return this;
    },
    subtract(interval, value) {
      this.add(interval, -value);
      return this;
    },
    result() {
      return formatter.format(newDataValue);
    },
  };
  return calculateDate;
}

const result = shmoment(new Date(2020, 0, 7, 17, 17, 17))
  .add('minutes', 2)
  .add('days', 8)
  .subtract('years', 1)
  .result();

console.log(result); // => .. Jan 15 2019 17:19:17 ...

const result2 = shmoment(new Date(2020, 0, 7, 17, 17, 17, 155))
  .add('minutes', 2)
  .add('years', 8)
  .add('days', 1)
  .add('hours', 1)
  .subtract('years', 1)
  .add('milliseconds', 444)
  .subtract('milliseconds', 44)
  .result();
console.log(result2); // => Jan 8, 2027, 18:19:17
