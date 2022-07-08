'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
export class Order {
  constructor(price, city, type) {
    this.id = `id: ${Math.random().toString(16).substr(2, 7)}`;
    this.price = Number(price);
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = new Date();
    this.city = String(city);
    this.type = String(type);
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    if (this.isConfirmed === false) {
      this.isConfirmed = true;
      this.dateConfirmed;
    }
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}

// -- test Data

// const order1 = new Order(2000, 'Kyiv', 'Buy');
// console.log(order1.id); // random
// console.log(order1.price); // 2000
// console.log(order1.dateCreated); // new date
// console.log(order1.isValidType()); // true
// console.log(order1.checkPrice()); // true
// order1.confirmOrder();
// console.log(order1.isConfirmed); //true
// console.log(order1.dateCreated === order1.dateConfirmed); // false

// const order2 = new Order(500, 'Kyiv', 'Sell');
// console.log(order2.price); // 500
// console.log(order2.isValidType()); // true
// console.log(order2.checkPrice()); // false

// const order3 = new Order(1200, 'Kyiv', 'bought');
// console.log(order3.price); // 1200
// console.log(order3.isValidType()); // false
// console.log(order3.checkPrice()); // true
// console.log(order3.type);
