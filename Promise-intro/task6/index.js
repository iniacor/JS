/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = (userId) => {
  const promise = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: 'john',
          age: 17,
          userId,
          email: `${userId}@example.com`,
        });
      }, 1000);
    }
  });
  return promise;
};

const requestResult = requestUserData('userId777');
requestResult
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
