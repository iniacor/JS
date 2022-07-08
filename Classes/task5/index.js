/* eslint-disable max-classes-per-file */

export class User {
  constructor(id, name, sessionId) {
    this._id = String(id);
    this._name = String(name);
    this._sessionId = String(sessionId);
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map((el) => el.name);
  }

  getUserIds() {
    return this._users.map((el) => el.id);
  }

  getUserNameById(userId) {
    return this._users
      .filter((el) => el.id === userId)
      .map((el) => el.name)
      .pop();
  }
}

// ----test Data
// const user = new User('1', 'Tom', 'session-id');
// const user2 = new User('2', 'Bob', 'session-id');
// const userRepos = new UserRepository([user, user2]);

// console.log(user.id); // ===> '1'
// console.log(user.name); // ===> 'Tom'
// console.log(user.sessionId); // ===> 'session-id'
// console.log(userRepos);
// console.log(userRepos.getUserNames());
// console.log(userRepos.getUserId());
// console.log(userRepos.getUserNameById('1'));

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

// пример работы getters / setters у классов и объектов

// class Dog {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(name) {
//     this._name = name;
//   }
// }

// const myDog = new Dog('Rex');
// console.log(myDog.name); // ===> 'Rex'
// myDog.name = 'Buddy'; // ===> если бы не было setter, то имя бы не поменялось
// console.log(myDog.name); // ===> 'Buddy'

// export class Wallet {
//   constructor(balance) {
//     this._balance = balance;
//   }

//   get balance() {
//     return this._balance;
//   }

//   getBalance() {
//     return this._balance;
//   }

//   deposit(amount) {
//     return (this._balance += amount);
//   }
//   withdraw(amount) {
//     if (amount > this._balance) {
//       console.log('No enough funds');
//       return;
//     }
//     return (this._balance -= amount);
//   }
// }

// -- test Data
// const wallet1 = new Wallet(0);

// wallet1.deposit(1000);
// console.log(wallet1.getBalance());
// wallet1.balance = 500;
// console.log(wallet1.balance);
