function findDivCount(a, b, n) {
  let res = 0;
  for (let i = a; i <= b; i++) {
    if (i % n === 0) {
      res += 1;
    }
  }
  return res;
}
console.log(findDivCount(2, 20, 2));
