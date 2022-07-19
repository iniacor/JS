export const asyncCalculator = (numbr) =>
  new Promise((resolve) => {
    resolve(numbr);
  })
    .then(
      (value) =>
        new Promise((resolve) => {
          if (value === 5) {
            setTimeout(() => {
              console.log(`Initial value: ${value}`);
              resolve(value);
            }, 2500);
          }
        })
    )
    .then(
      (value) =>
        new Promise((resolve) => {
          if (value === 5) {
            setTimeout(() => {
              const result = value * value;
              console.log(`Squred value: ${result}`);
              resolve(result);
            }, 2500);
          }
        })
    )
    .then((value) => {
      const result = value * 2;
      console.log(`Doubled value: ${result}`);
    });

// test Data
asyncCalculator(5);
