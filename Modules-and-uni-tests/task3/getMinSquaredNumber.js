const arr = [-777, 3, -2, 6, 45, -20];
export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((num) => num * num);
};
console.log(getMinSquaredNumber(arr));
