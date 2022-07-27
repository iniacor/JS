export const fetchUserData = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};

export const fetchRepositories = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};

// algo
// get array
// iterate input array with map and do fetch on every step
// put in variable result of await Promise.all(fetch response) and get property body of every elem
// return promise with array of users blog
// cath error if any requre has error
