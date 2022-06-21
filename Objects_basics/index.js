//Трансформация из массива в объект-
// const transformToObject = (arr) => {
//   const newObject = {};
//   arr.map((name) => (newObject[name] = name));
//   return newObject;
// };
// console.log(transformToObject(['a', 17.1, 'John Doe']));

//Достаем из объекта значения свойств и кладем в новый массив
// const concatProps = (obj) => {
//   let props = [];
//   for (let property in obj) {
//     props.push(obj[property]);
//   }
//   return props;
// };
// console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' }));

//Вывод значений свойств объекта
// const transaction = {
//   currency: 'USD',
//   value: 170,
//   operation: 'sale',
//   agent: {
//     country: 'Ukraine',
//     company: 'NYSE',
//   },
//   'operation time': 1584029990001,
// };
// const key = 'operation';
// console.log(transaction.currency);
// console.log(transaction['value']);
// console.log(transaction[key]);
// console.log(transaction.agent['company']);
// console.log(transaction.agent.country);
// console.log(transaction['operation time']);
/* 1. Выведи в консоль значение свойства 'currency' с помощью точки */
/* 2. Выведи в консоль значение свойства 'value' с помощью квадратных скобок */
/* 3. Выведи в консоль значение свойства обьекта transaction, название которого находится в переменной key - используй квадратные скобки */
/* 4. Выведи в консоль значение свойства 'company' используя квадратные скобки */
/* 5. Выведи в консоль значение свойства 'country' используя точку */
/* 6. Выведи в консоль значение свойства 'operation time' используя квадратные скобки */

//Присваиваем объекту новые свойства со сзначениями
// const anotherKey = 'married';
// const user = {
//   name: 'Tom',
//   age: 17,
// };
// user.hobby = 'football';
// user[anotherKey] = false;
// user['favorite music'] = 'rock';
// user['address'] = [];
// user.address.country = 'Ukraine';
// user.address.building = 17;
// console.log(user);
/* присвой объекту свойство hobby со значением 'football' с помощью точки */
/* название свойства хранится в переменной anotherKey. Присвой объекту такое свойство со значением false */
/* присвой объекту свойство 'favorite music' со значением 'rock' */
/* присвой объекту свойство 'address', которое будет пустым объкетом */
/* присвой объекту в 'address' свойство 'country', со значением 'Ukraine' */
/* присвой объекту в 'address' свойство 'building', со значением 17 */
/* выведи в консоль итоговый объект user */

// Вывод всех ключей объекта
// const obj = {
//   name: 'tom',
//   age: 17,
//   height: 170,
// };
// function getKeys(obj) {
//   for (let prop in obj) {
//     console.log(prop);
//   }
// }
// console.log(getKeys(obj));

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// рабочая версия с циклом
// const pickProps = (obj, props) => {
//   let result = {};
//   for (let prop in obj) {
//     let propsName = props.shift();
//     if (obj.hasOwnProperty(propsName)) {
//       result[propsName] = obj[propsName];
//     }
//   }
//   return result;
// };

// рабочая версия с методом Object.keys(obj)
// const pickProps = (obj, props) => {
//   let result = {};
//   Object.keys(obj)
//     .filter((el) => props.includes(el))
//     .map((el) => (result[el] = obj[el]));
//   return result;
// };
// console.log(pickProps(obj, ['a', 'c'])); // +
// console.log(obj); // +
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['n', 'c'])); //
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['n', 'k'])); //+
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); //+

// Фильтрация всех пользователей возраст которых меньше 18 лет
// const getAdults = (obj) => {
//   let result = {};
//   for (let key in obj) {
//     if (obj[key] >= 18) {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// };
// Версия через метод  Object.keys
// const getAdults = (obj) => {
//   let result = {};
//   Object.keys(obj)
//     .filter((personAge) => obj[personAge] >= 18)
//     .map((key) => (result[key] = obj[key]));
//   return result;
// };
// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
// console.log(getAdults({ Ann: 56, Andrey: 7 }));
// console.log(getAdults({}));
// examples
// getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
// getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
