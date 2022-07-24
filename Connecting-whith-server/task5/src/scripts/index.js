import { createUser } from './usersGateway.js';

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
// method formElem.reset()

// can read format with Object.fromEntries(new FormData(formElem))
// for validation check use method reportValidity()
// refactoring
const loginForm = document.querySelector('.login-form');
const registerBtn = document.querySelector('.submit-button');

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
    console.log('User created');
    loginForm.reset();
  });
};
loginForm.addEventListener('submit', onSubmit);

const onValidation = (e) => {
  console.log(loginForm.reportValidity());

  if (loginForm.reportValidity()) {
    registerBtn.removeAttribute('disabled');
    return;
  }

  registerBtn.setAttribute('disabled', true);
};

loginForm.addEventListener('input', onValidation);
