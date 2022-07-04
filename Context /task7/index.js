const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  },
  setFullName(fullName) {
    [this.firstName, this.lastName] = fullName.split(' ');
  },
};

// -- test Data
user.setFullName('Kris Kuk');
console.log(user.getFullName());
user.setFullName('Rick Sanchez');
console.log(user.getFullName());
