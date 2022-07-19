export const asyncCalculator = (numbr) =>
  new Promise((resolve) => {
    resolve(numbr);
  })
    .then(
      (value) =>
        new Promise((resolve) => {
          setTimeout(() => {
            console.log(`Initial value: ${value}`);
            resolve(value);
          }, 500);
        })
    )
    .then(
      (value) =>
        new Promise((resolve) => {
          if (value === 5) {
            setTimeout(() => {
              const result = value * value;
              console.log(`Squared value: ${result}`);
              resolve(result);
            }, 500);
          }
        })
    )
    .then((value) => {
      const result = value * 2;
      if (numbr === 5) {
        console.log(`Doubled value: ${result}`);
      }
    });

// test Data
asyncCalculator(5);
asyncCalculator(6);
