// Context this
// Реализация bind

const user = {
  name: 'Petr',
  age: 20,
};

function sayHi(Phrase) {
  return `${Phrase} ${this.name} you are ${this.age} years old!`;
}

export const bind = (fn, context, ...rest) => {
  return function (...args) {
    return fn.apply(context, rest.concat(args));
  };
};
export const bind2 = (fn, context, ...rest) => {
  return function (...args) {
    return fn.call(context, ...rest.concat(args));
  };
};

const greeting = bind(sayHi, user, 'Hello');

console.log(greeting('Hello'));
