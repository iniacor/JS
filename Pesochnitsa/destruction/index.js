// Деструктурирующее присваивание
// let user = { name: 'John', years: 30 };
// let { name, years: age, isAdmin = false } = user;

// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false

// Максимальная зарплата
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };
// let salaries2 = {
//   John: 300,
//   Pete: 300,
//   Mary: 250,
// };

// const topSalary = (salaries) => {
//   if (Object.keys(salaries).length === 0) {
//     return null;
//   }
//   const [maxSalary] = Object.entries(salaries).sort((a, b) => b[1] - a[1]);
//   return maxSalary;
// };
// console.log(topSalary(salaries));
// console.log(topSalary(salaries2));
// console.log(topSalary({}));
