/**
 * @param {string[]} users
 * @return {promise}
 */

// algo
// get array
// iterate input array with map and do fetch on every step
// put in variable result of await Promise.all(fetch response) and get property body of every elem
// return promise with array of users blog
// cath error if any requre has error

// export const getUsersBlogs = async (users) => {
//   try {
//     const userFetch = users.map((userName) => {
//       return fetch(`https://api.github.com/users/${userName}`).then(
//         (response) => response.json().then((url) => url.blog)
//       );
//     });
//     const response = await Promise.all(userFetch);
//     return response;
//   } catch (error) {
//     throw new Error('Failed to load data');
//   }
// };

// examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then((linksList) =>
//   console.log(linksList)
// ); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]

// =================== Refactoring =========================

export const getUsersBlogs = async users => {
  try {
    const userFetch = users.map(userName => {
      return fetch(`https://api.github.com/users/${userName}`).then(response =>
        response.json(),
      );
    });
    const userResults = await Promise.all(userFetch);
    console.log(userResults);
    return userResults.map(({ blog }) => blog);
  } catch (error) {
    throw new Error('Failed to load data');
  }
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList =>
  console.log(linksList),
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]

// просто fetch возвращает промис Promise {<fulfilled>: Response} с хедерами и боди.
// Чтобы получить не хедеры а объект в респонсе([[PromiseResult]]: Object), применяем метод .then(response => response.json()
// Чтобы получить непосредственно объекты применяем await Promise.all(userFetch);
