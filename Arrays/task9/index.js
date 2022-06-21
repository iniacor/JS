// put your code here
const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copyArr = arr.slice();
  return copyArr.reverse();
};
console.log(reverseArray([2, 5, 6, 8, 11, 9, 4]));
