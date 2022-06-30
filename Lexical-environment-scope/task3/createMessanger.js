import { add, decrease, reset, getMemo } from './index.js';

function calculation() {
  return {
    add: add(),
    decrease: decrease(),
    reset: reset(),
    getMemo: getMemo(),
  };
}
const calculator = calculation();
//--test data
console.log(calculator.add(5)); //==>5
console.log(calculator.add(10)); //==>15
console.log(calculator.decrease(8)); //==>7
console.log(calculator.reset()); //==>0
console.log(calculator.getMemo()); //==>0
