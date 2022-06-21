// const arr = [1, 2, 3, 4, 5];
// const cloneArr = (arr) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const [] = [...arr];
//   return [...arr];
// };
// const newArr = cloneArr(arr);
// arr.push(2);
// console.log(newArr);
// console.log(arr);

const arr = [1, 2, 3, 4, 5];
const cloneArr = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const cloneArr = arr.slice();
  return cloneArr;
};

const newArr = cloneArr(arr);
arr.push(2);
console.log(newArr);
console.log(arr);
