export class Wallet {
  constructor() {
    this._balance = 0;
  }

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    return (this._balance += amount);
  }
  withdraw(amount) {
    if (amount > this._balance) {
      console.log('No enough funds');
      return;
    }
    return (this._balance -= amount);
  }
}

// -- test Data
// const wallet1 = new Wallet();
// console.log(wallet1._balance);
// wallet1.deposit(1000);
// console.log(wallet1._balance);
// wallet1.withdraw(300);
// console.log(wallet1._balance);
// wallet1.withdraw(2000);
// console.log(wallet1._balance);
// wallet1.deposit(100);
// console.log(wallet1._balance);
// wallet1.balance = 100;
// console.log(wallet1._balance);
