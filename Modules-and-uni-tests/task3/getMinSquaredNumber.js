const arr = [-777, 3.2, -2, 6, 45, -20];
export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const abs = arr.map((num) => Math.abs(num * num));
  return Math.min(...abs);
};
console.log(getMinSquaredNumber(arr));
