export const getAdults = (obj) => {
  const result = {};
  Object.keys(obj)
    .filter((personAge) => obj[personAge] >= 18)
    .map((key) => (result[key] = obj[key]));
  return result;
};
