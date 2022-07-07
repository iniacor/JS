export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(value) {
    if (value < 0) {
      return false;
    }
    this.age = value;
    if (value >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }

  static createEmpty() {
    return new this('', null);
  }
}
const user1 = new User('Tom', 18);
const user2 = User.createEmpty();

// --test Data
// user1.sayHi();
// user1.requestNewPhoto();
// user1.setAge(15);
// console.log(user1.age);
// user1.setAge(0);
// console.log(user1.age);
// user1.setAge(5.5);
// console.log(user1.age);
// console.log(user1.setAge(26));
// user1.setAge(-1);
// console.log(user1.age);
// User.createEmpty();
// console.log(user2);
