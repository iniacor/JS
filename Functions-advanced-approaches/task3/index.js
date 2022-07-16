export const mult = (num1) => (num2) => num1 * num2;
export const twice = (num) => mult(2)(num);
export const triple = (num) => mult(3)(num);

// -test Data
// console.log(mult(2)(4)); // => 8
// console.log(twice(5)); // => 10
// console.log(triple(5)); // => 15
