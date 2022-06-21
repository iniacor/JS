const getSubArray = (arr, numberOfElements) => {
  const subArray = [];
  for (let num = 0; num < numberOfElements; num++) {
    subArray.push(arr[num]);
  }
  return subArray;
};
console.log(getSubArray([1, 2, 3, 4, 5], 2));
