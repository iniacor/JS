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
registerBtn.setAttribute('disabled', true);

const onRegister = () => {
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
registerBtn.addEventListener('click', onRegister);

const onValidation = () => {
  // if (e.target.reportValidity()) {
  //   registerBtn.disabled = false;
  // }
  if (loginForm.reportValidity()) {
    registerBtn.disabled = false;
  }
};
loginForm.addEventListener('change', onValidation);

// const onEmptyField = (e) => {
//   if (inputText !== '') {
//     registerBtn.disabled = false;
//   } else registerBtn.disabled = true;
// };
// inputField.addEventListener('change', onEmptyField);
