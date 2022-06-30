import { add, decrease, reset, getMemo } from './calculateSettings.js';
function calculation() {
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}
const calculator = calculation();
//--test data
console.log(calculator.add(5)); //==>5
console.log(calculator.add(10)); //==>15
console.log(calculator.decrease(8)); //==>7
console.log(calculator.reset()); //==>0
console.log(calculator.getMemo()); //==>0
