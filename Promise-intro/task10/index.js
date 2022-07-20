export const delay = (delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });

// test Data
delay(3000).then(() => console.log('Done'));
