function uniqueCount(array) {
  if (!Array.isArray === 0) {
    return null;
  }
  if (array.length !== 0) {
    let uniqueCount = [];
    const tempArray = [...array].sort();
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] !== tempArray[i]) {
        uniqueCount.push(tempArray[i]);
      }
    }
    return uniqueCount.length;
  }
}

console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]));
console.log(uniqueCount([]));

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
