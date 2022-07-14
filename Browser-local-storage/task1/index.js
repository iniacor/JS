// -test Data
localStorage.clear();
localStorage.setItem('name', JSON.stringify('Tom'));
localStorage.setItem('age', JSON.stringify(17));
localStorage.setItem('data', JSON.stringify([1, 2, 'Karl']));
localStorage.setItem('users', JSON.stringify({ name: 'Petya' }));
localStorage.setItem('height', JSON.stringify(null));
localStorage.setItem('isMarried', JSON.stringify(false));

// export const getLocalStorageData = () => {
//   return Object.entries(localStorage).reduce((acc, [key, value]) => {
//     return { ...acc, [key]: JSON.parse(value) };
//   }, {});
// };
export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (error) {
      newValue = value;
    }
    return { ...acc, [key]: newValue };
  }, {});
};
console.log(getLocalStorageData());
