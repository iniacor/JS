function getArrayBounds(arr) {
  let result = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  result = [arr.length, arr[0], arr[arr.length - 1]];
  return result;
}
console.log(getArrayBounds([1, 10, 9, 11]));
console.log(getArrayBounds(1, 10, 9, 11));
