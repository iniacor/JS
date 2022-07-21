const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

const defaultAvatar = 'https://avatars.githubusercontent.com/u/1342004?v=4';
userAvatarElem.src = defaultAvatar;
const defaultUserName = 'Google';
userNameElem.textContent = defaultUserName;

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const fetchUserData = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`).then((response) =>
    response.json()
  );
};

const renderUserData = (userData) => {
  const { name, avatar_url, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : null;
};

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName).then((userData) => renderUserData(userData));
};
showUserBtnElem.addEventListener('click', onSearchUser);

///=================== another code

// const userAvatar = document.querySelector('.user__avatar');
// const userName = document.querySelector('.user__name');
// const userLocation = document.querySelector('.user__location');

// const userNameInput = document.querySelector('.name-form__input');
// const userBtnInput = document.querySelector('.name-form__btn');

// const sendRequestFetch = (name) => {
//   return fetch(`http://api.github.com/users/${name}`).then((response) =>
//     response.json()
//   );
// };
// const userRender = (gitResponse) => {
//   const { avatar_url, location, name } = gitResponse;
//   userAvatar.src = avatar_url;
//   userName.textContent = name;
//   userLocation.textContent = location ? `from ${location}` : null;
// };

// const onClickButton = () => {
//   const getName = userNameInput.value;
//   sendRequestFetch(getName).then((response) => userRender(response));
// };

// userBtnInput.addEventListener('click', onClickButton);
