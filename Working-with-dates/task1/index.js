const week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
// object, number
// string
export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return week[new Date(dateInFuture).getDay()];
};

const date = new Date(2022, 6, 15);
const res = dayOfWeek(date, 13);
console.log(res); // => Th
console.log(date); // =>Fri Jul 15 2022 00:00:00 GMT+0300 (Восточная Европа, летнее время)
