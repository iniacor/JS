const week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];
// object, number
// string
export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return week[new Date(dateInFuture).getDay()];
};

const res = dayOfWeek(new Date(2022, 6, 15), 13);
console.log(res);
