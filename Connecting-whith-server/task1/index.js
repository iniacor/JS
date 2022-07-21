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
  userLocationElem.textContent = location;
};

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName).then((userData) => renderUserData(userData));
};
showUserBtnElem.addEventListener('click', onSearchUser);
