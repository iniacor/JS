// This в callback
export const event = {
  guests: [
    { name: 'John', age: 18, email: 'example@server.com' },
    { name: 'Bob', age: 17, email: 'example@server.com' },
    { name: 'Morty', age: 15, email: 'example@server.com' },
    { name: 'Sara', age: 25, email: 'example@server.com' },
  ],
  message: 'Welcome to the party!',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};
// --test Data
console.log(event.getInvitations());
