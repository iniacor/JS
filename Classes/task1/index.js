export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  if (age < 0) {
    return false;
  }
  this.age = age;
  if (age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
    return this.age;
  }
  return age;
};

// const user1 = new User('Tom', 18);

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
