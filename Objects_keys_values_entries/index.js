//Возвращаем из объекта массив имен пользователей чей возраст больще 18
// const obj = {
//   Bob: 17,
//   Kate: 18,
//   Tom: 21,
// };
// const getAdults = (userObj) =>
//   Object.entries(userObj)
//     .filter((name) => name[1] >= 18)
//     .map((name) => name[0]);

// console.log(getAdults(obj));
// Если юзать метод Object.keys
// const getAdults = (obj) =>
//   Object.keys(obj)
//     .filter((personAge) => obj[personAge] >= 18)
//     .map((key) => key);

// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
// console.log(getAdults({ Ann: 56, Andrey: 7 }));
// console.log(getAdults({}));

// Копируем объект
// const obj = {
//   Bob: 17,
//   Kate: 18,
//   Tom: 21,
// };
// Копируем объект через метод Object.assign({}, obj)
// const copyObj = (obj) => Object.assign({}, obj);
// const anotherObject = copyObj(obj);
// console.log(obj);
// console.log(anotherObject);
// console.log(obj === anotherObject);
// Копируем объект через spres метод { ...obj }
// const copyObj = (obj) => (obj = { ...obj });
// const anotherObject = copyObj(obj);
// console.log(obj);
// console.log(anotherObject);
// console.log(obj === anotherObject);

// Выводим с помощью функции каждый ключ объекта в консоль с новой строки
// const obj = {
//   Bob: 17,
//   Kate: 18,
//   Tom: 21,
// };
//function declaration
// function getKeys(obj) {
//   Object.keys(obj).map((key) => console.log(key));
// }
//arrow function
// const getKeys = (obj) => Object.keys(obj).map((key) => console.log(key));
// getKeys(obj);

//Добавляем данные в объект
//Через точку
// function addPropertyV1(userData, userId) {
//   userData.id = userId;
//   return userData;
// }
//Через Object.assign
// function addPropertyV1(userData, userId) {
//   let id = {
//     id: userId,
//   };
//   return Object.assign(userData, id);
// }
//Через Object.assign плюс копирование исходного объекта
// function addPropertyV1(userData, userId) {
//   let id = {
//     id: userId,
//   };
//   const anotherObj = Object.assign({}, userData);
//   return Object.assign(anotherObj, id);
// }
//Через ...spred operator
// function addPropertyV1(userData, userId) {
//   const { ...restProps } = userData;
//   let id = {
//     ...restProps,
//     id: userId,
//   };
//   return id;
// }

// examples;
// const user = {
//   name: 'Sam',
// };
// console.log(user);
// const anotherUser = addPropertyV1(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
// console.log(user);
// console.log(anotherUser);
// console.log(user === anotherUser);

// examples merge objects
// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   student: false,
// };
// В приоритете свойства второго объекта(source).Его свойства затирают аналогичные из первого и добавляют отсутствующие через метод Object.assign. Для того чтобы не мутировать данные в целевом (первом) объекте мы сперва делаем копию объекта через  буфферную переменную : const bufferObj = Object.assign({}, obj1);
// function mergeObjectsV1(obj1, obj2) {
//   const bufferObj = Object.assign({}, obj1);
//   return Object.assign(bufferObj, obj2);
// }

// В приоритете свойства первого объекта(source).Его свойства затирают аналогичные из первого и добавляют отсутствующие через метод Object.assign.Для того чтобы не мутировать данные в целевом (втором) объекте мы сперва делаем копию объекта через  буфферную переменную :const bufferObj = Object.assign({}, obj2);
// function mergeObjectsV2(obj1, obj2) {
//   const bufferObj = Object.assign({}, obj2);
//   return Object.assign(bufferObj, obj1);
// }

// В приоритете свойства второго объекта(source).Его свойства затирают аналогичные из первого и добавляют отсутствующие через метод слияния используя оператор ...spred(const obj3 = { ...obj1, ...obj2 };
// function mergeObjectsV3(obj1, obj2) {
//   const obj3 = { ...obj1, ...obj2 };
//   return obj3;
// }

// В приоритете свойства первого объекта(source).Его свойства затирают аналогичные из второго и добавляют отсутствующие через метод слияния используя оператор ...spred(const obj3 = { ...obj2, ...obj1 };)
// function mergeObjectsV4(obj1, obj2) {
//   const obj3 = { ...obj2, ...obj1 };
//   return obj3;
// }

// console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
// console.log(obj1);
// console.log(obj2);
// mergeObjectsV2(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }
// mergeObjectsV3(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV4(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }

// const player = { ...obj };//Делаем копию объекта obj в новый объект player через спред оператор/

// const obj1 = { foo: 'bar', x: 42 };
// const obj2 = { foo: 'baz', y: 13, z: 15 };
// const merge = (obj1, obj2) => ({ ...obj1, ...obj2 });
// console.log(merge(obj1, obj2));

// Извлекаем все имена
// const rooms2 = {};

// const rooms = {
//   room1: [
//     { name: 'Jack' },
//     { name: 'Andrey' },
//     { name: 'Ann' },
//     { name: 'Vasyl' },
//   ],

//   room2: [
//     { name: 'Dan' },
//     { name: 'Kolya' },
//     { name: 'Olya' },
//     { name: 'Bob' },
//   ],

//   room3: [
//     { name: 'Denis' },
//     { name: 'Max' },
//     { name: 'Alex' },
//     { name: 'Stas' },
//   ],
// };

// const getPeople = (obj) =>
//   Object.values(obj)//получаю три массива с объектами именами
//     .reduce((acc, room) => acc.concat(room))//объединяю все объекты в 1 масси
//     .map((name) => Object.values(name))//получаю значения каждого объекта в отдельный массив
//     .flat;// соединяю все подмассивы в один массив с именами
//рабочая версия
// const getPeople = (obj) =>
//   Object.values(obj)
//     .reduce((acc, room) => acc.concat(room), [])
//     .map((name) => Object.values(name))
//     .flat();
// console.log(getPeople(rooms));
// console.log(getPeople(rooms2));

// Подсчет суммы дневных транзакций
// const dayTransactions = [
//   { userId: 22, amount: 60, operation: 'sell' },
//   { userId: 22, amount: 160, operation: 'buy' },
//   { userId: 44, amount: 90, operation: 'sell' },
// ];
//решение через map
// const getTotalRevenue = (transactions) => {
//   let res = 0;
//   transactions.map((user) => (res += user['amount']));
//   return res;
// };
//решение через reduce
// const getTotalRevenue = (transactions) =>
//   transactions.reduce((acc, user) => (acc += user['amount']), 0);
// const result = getTotalRevenue(dayTransactions); // ==> 310
// console.log(result);

//Добавляем computed property в объект
// const transaction = {
//   value: 170,
// };
// с помощью квадратных скобок
// function addPropertyV1(obj, key, value) {
//   obj[key] = value;
//   return obj;
// }

// С помощью Object.assign()
// function addPropertyV2(obj, key, value) {
//   let computedProperty = {
//     [key]: value,
//   };
//   return Object.assign(obj, computedProperty);
// }
// С помощью Object.assign() плюс копия входящего массива чтобы избежать мутации данных
// function addPropertyV3(obj, key, value) {
//   let copyObj = Object.assign({}, obj);
//   let computedProperty = {
//     [key]: value,
//   };
//   return Object.assign(copyObj, computedProperty);
// }
// C помошью оператора spred
// function addPropertyV4(obj, key, value) {
//   const copyObj = { ...obj };
//   const computedProperty = {
//     [key]: value,
//   };
//   return { ...copyObj, ...computedProperty };
// }

// addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
// console.log(addPropertyV1(transaction, 'currency', 'USD'));

// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];

// function buildObject(keysList, valuesList) {
//   const obj = {};
//   for (var i = 0; i < keysList.length; i++) {
//     obj[keysList[i]] = valuesList[i];
//   }
//   return obj;
// }
// через forEach
// function buildObject(keysList, valuesList) {
//   const obj = {};
//   keysList.forEach((key, index) => (obj[key] = valuesList[index]));
//   return obj;
// }
// через map
// function buildObject(keysList, valuesList) {
//   const obj = {};
//   keysList.map((key, index) => (obj[key] = valuesList[index]));
//   return obj;
// }
// через reduce
// const buildObject = (keysList, valuesList) =>
//   keysList.reduce((acc, key, index) => {
//     acc[key] = valuesList[index];
//     return acc;
//   }, {});

// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(result);

// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   age: 17,
// };

// const obj3 = {
//   name: 'Bob',
//   age: 17,
//   student: false,
// };

// const obj4 = {
//   name: 'Tom',
//   age: 17,
// };

//Сравнение двух объектов по свойствам а не по ссылке
// function compareObjects(obj1, obj2) {
//   return Object.keys({ ...obj1, ...obj2 }).every(
//     (key) => obj1[key] === obj2[key]
//   );
// }

// compareObjects(obj1, obj2); // ==> false
// compareObjects(obj2, obj3); // ==> false
// compareObjects(obj1, obj4); // ==> true

// console.log(compareObjects(obj1, obj2));
// console.log(compareObjects(obj2, obj3));
// console.log(compareObjects(obj1, obj4));

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};
const getCustomersList = (obj) => {
  return Object.values({ ...obj }).sort((a, b) => (a.name > b.name ? 1 : -1));
};
console.log(getCustomersList(customers));
