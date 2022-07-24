// import { createUser } from './usersGateway.js';

// algo
// get btn node +++
// btn.setAttribute('disabled', 'boolean') +++
// add eventlistener to btn +++
// get input nodes +++
// add eventlistener to btn's +++
// write info from input to obj newUserData +++
// write fn to post data to server +++
// Post newUserData to server throw method POST +++
// listen server answer (.then) and alert +++
// clear input field(set empty string as value) or use
// refactoring

// const baseUrl = 'https://62da9225e56f6d82a7651b64.mockapi.io/api/v1/users';

export function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then((response) => response.json());
}

const loginForm = document.querySelector('.login-form');
const registerBtn = document.querySelector('.submit-button');

const onValidation = (e) => {
  if (loginForm.reportValidity()) {
    registerBtn.removeAttribute('disabled');
    return;
  }
  registerBtn.setAttribute('disabled', true);
};

loginForm.addEventListener('input', onValidation);

const onSubmit = (e) => {
  e.preventDefault();
  const { name, email, password } = Object.fromEntries(new FormData(loginForm));
  const newUserData = {
    name,
    email,
    password,
  };

  createUser(newUserData).then((userData) => {
    alert(JSON.stringify(userData));
    loginForm.reset();
  });
};
loginForm.addEventListener('submit', onSubmit);
