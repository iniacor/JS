export const parseUser = (jsonString) => {
  try {
    const parseResult = JSON.parse(jsonString);
    return parseResult;
  } catch (error) {
    return null;
  }
};
// Test Data
console.log(parseUser('{"name":"Tom", "age": 27'));
