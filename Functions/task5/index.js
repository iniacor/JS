//put your code here
let result = 0;
function getSum(start, end) {
  for (let num = start; num <= end; num++)
    if (num % 2 === 0) {
      result += num;
    }
  return result;
}
console.log(getSum(10, 20));
