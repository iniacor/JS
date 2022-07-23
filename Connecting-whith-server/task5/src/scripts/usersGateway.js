const baseUrl = 'https://62da9225e56f6d82a7651b64.mockapi.io/api/v1/users';

export function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}
// .then((response) => response.json());
