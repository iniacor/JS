export const user = {
  firstName: 'John',
  lastName: 'Dou',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());
