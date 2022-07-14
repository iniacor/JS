// input obj,obj
// output string: nDays nHours nMinutes nSecond
export const getDiff = (startDate, endDate) => {
  const utc1 = Date.UTC(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate(),
    startDate.getHours(),
    startDate.getMinutes(),
    startDate.getSeconds()
  );
  const utc2 = Date.UTC(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate(),
    endDate.getHours(),
    endDate.getMinutes(),
    endDate.getSeconds()
  );
  const duration = Math.abs(Math.floor(utc2 - utc1));
  const days = parseInt(duration / (1000 * 60 * 60 * 24));
  const hours = parseInt((duration / (1000 * 60 * 60)) % 24);
  const minutes = parseInt((duration / (1000 * 60)) % 60);
  const seconds = parseInt((duration / 1000) % 60);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// test Data--
// const startD = new Date();
// const endD = new Date(2017, 4, 13);
// const endD2 = new Date(2024, 3, 18);
// console.log(getDiff(startD, endD));
// console.log(getDiff(startD, endD2));
// console.log(startD);
// console.log(endD);
