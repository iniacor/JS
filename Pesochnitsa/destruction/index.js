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

// Проверка наличие свойства в объекте
// const user = {
//   name: 'Tom',
//   age: 18,
//   color: 'white',
// };
// console.log('name' in user); // true - свойство есть в объекте
// console.log(user.height === undefined); // true = свойства нет в объекте
// console.log(user.age === undefined); // false - свойство есть в объекте
