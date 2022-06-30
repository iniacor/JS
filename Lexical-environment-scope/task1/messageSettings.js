export const sendMessage = (name) => {
  console.log(`${name}, ${message}! Your Gromcode`);
};

let message = 'Good job';
export const setMessage = (text) => {
  message = text;
};
