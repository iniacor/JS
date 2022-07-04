export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    [this.firstName, this.lastName] = fullName.split(' ');
  },
};

// setFullName
// input - string;
// output - none (change value of user's properties);

// -- test Data
// user.setFullName('Kris Kuk');
// console.log(user.getFullName());
// user.setFullName('Rick Sanchez');
// console.log(user.getFullName());
