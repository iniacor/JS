/* eslint-disable */

var arr = [];

for (let i = 0; i < 10; i += 1) {
  arr[i] = function () {
    return i;
  };
}

console.log(arr[0]());
console.log(arr[1]());
console.log(arr[2]());
console.log(arr[3]());
