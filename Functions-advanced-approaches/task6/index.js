export const maxFibbonacci = (num) => {
  let current = 1;
  let previos = 1;
  while (current + previos <= num) {
    current += previos;
    previos = current - previos;
  }
  return current;
}; // test Data
console.log(maxFibbonacci(15));
