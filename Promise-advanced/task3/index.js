/**
 * @param {string[]} users
 * @return {promise}
 */

// algo
// get fetch
// return promise with array of users
// cath error if any requre has error
export const getUsersBlogs = async (users) => {
  try {
    const userFetch = users.map((userName) => {
      return fetch(`https://api.github.com/users/${userName}`);
    });
    const response = await Promise.all(userFetch);
    console.log(response);
    const linkList = response.map((url) => url.body);
    return linkList;
  } catch (error) {
    throw new Error('Failed to load data');
  }
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then((linksList) =>
  console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
