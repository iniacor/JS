const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'UTC',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

export const getGreenwichTime = (date) => {
  return formatter.format(date);
};
const date = new Date();

// test Data
console.log(getGreenwichTime(date));
console.log(date);
