// через метод includes
// function removeDuplicates(array) {
//   if (!Array.isArray(array)) {
//     return null;
//   }
//   const arrayWithoutDuplicate = [];
//   for (let num of array) {
//     if (!arrayWithoutDuplicate.includes(num)) {
//       arrayWithoutDuplicate.push(num);
//     }
//   }
//   return arrayWithoutDuplicate;
// }
// console.log(removeDuplicates([2, 3, 5, 5, 6, 6, 7, 8]));

// , используя структуру данных Set
// function removeDuplicates(array) {
//   const yourArrayWithoutDuplicates = [...new Set(array)];
//   return yourArrayWithoutDuplicates;
// }
// console.log(removeDuplicates([2, 3, 5, 5, 6, 6, 7, 8]));

// возвращает в новый массив дубликаты из текущего массива
// function removeDuplicates(array) {
//   let duplicates = [];
//   const tempArray = [...array].sort();
//   for (let i = 0; i < tempArray.length; i++) {
//     if (tempArray[i + 1] === tempArray[i]) {
//       duplicates.push(tempArray[i]);
//     }
//   }
//   return duplicates;
// }

// console.log(removeDuplicates([2, 3, 5, 5, 6, 6, 7, 8]));
// возвращает новый массив без дубликатов через сравнение соседних элементов после сортировки
function removeDuplicates(array) {
  let whithouduplicates = [];
  const tempArray = [...array].sort();
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] !== tempArray[i]) {
      whithouduplicates.push(tempArray[i]);
    }
  }
  return whithouduplicates.length;
}

// console.log(removeDuplicates([2, 3, 5, 5, 6, 6, 7, 8]));
console.log(removeDuplicates([1, 4, 1, 8, 3, 4, 8, 8]));
console.log(removeDuplicates([]));
