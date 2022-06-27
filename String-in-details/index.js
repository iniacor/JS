// const splitText = (str, length = 10) => {
//   if (typeof str !== typeof '') {
//     return null;
//   }
//   const strArr = [];
//   let startPosition = 0;
//   while (true) {
//     let chunk = str.substr(startPosition, length);
//     if (chunk.length === 0) {
//       break;
//     }
//     strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//     startPosition += length;
//   }
//   return strArr.join('\n');
// };
// console.log(splitText('sdsfvmlsdssdsdmxzv', 4));
//Сортируем телефонную книгу
// const arr = [
//   {
//     name: 'Tom',
//     phoneNumber: '777-77-77',
//   },
//   {
//     name: 'Bob',
//     phoneNumber: '725-74-27',
//   },
//   {
//     name: 'Mary',
//     phoneNumber: '737-75-70',
//   },
//   {
//     name: 'Alisa',
//     phoneNumber: '717-72-87',
//   },
//   {
//     name: 'Dilan',
//     phoneNumber: '767-57-13',
//   },
// ];
//рабочая версия
// const sortContacts = (arr, direction) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const result = arr.sort((a, b) => {
//     if (direction === false) {
//       return b.name.localeCompare(a.name);
//     } else return a.name.localeCompare(b.name);
//   });
//   return result;
// };
//Сокращенная версия
// const sortContacts = (arr, direction) =>
//   Array.isArray(arr)
//     ? arr.sort((a, b) =>
//         direction === false
//           ? b.name.localeCompare(a.name)
//           : a.name.localeCompare(b.name)
//       )
//     : null;

// console.log(sortContacts(arr));

//Разделяем входящую строку str на подстроки длиной length и возвращаем в виде массива
// const splitString = (str, length = 10) => {
//   if (typeof str !== typeof '') {
//     return null;
//   }
//   const strArr = [];
//   let startPosition = 0;
//   while (true) {
//     let chunk = str.substr(startPosition, length);
//     if (chunk.length === 0) {
//       break;
//     }
//     strArr.push(chunk + '.'.repeat(length - chunk.length));
//     startPosition += length;
//   }
//   return strArr;
// };
// console.log(splitString('sdsfvmlsdssdsdmxzv', 4));

const countOccurrences = (text = '', str) => {
  let count = 0;
  let index = text.indexOf(str);
  if (str.length === 0) {
    return null;
  }
  while (index !== -1) {
    count++;
    index = text.indexOf(str, index + 1);
  }
  return count;
};
console.log(countOccurrences('texttexttext', 'ex'));
