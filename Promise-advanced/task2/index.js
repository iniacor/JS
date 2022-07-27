import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

// algo
// get all nodes we need
// add event listener to show button
// in handler get input field value
// then write fetch request to server
// when we got answer with data call render fn
// render DOM elements
// show spinner elem
// then do fetcjh request to server for data(user repository list )
// create li element
// add for every li classname .repo-list__item
// for every li add textContent- repository name
// append all li elems to .repo-list
// add spinner elem classname .spinner_hidden
// if we have some error catch it and alert('Failed to load data')

const defaultUser = {
  name: '',
  avatar_url: 'https://avatars3.githubusercontent.com/u10001.',
  location: '',
};
renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = async () => {
  cleanReposList();
  showSpinner();
  const userName = userNameInputElem.value;
  try {
    const userData = await fetchUserData(userName);
    renderUserData(userData);
    const reposList = await fetchRepositories(userData.repos_url);
    renderRepos(reposList);
  } catch (error) {
    alert(error.message);
  } finally {
    hideSpinner();
  }
};
showUserBtnElem.addEventListener('click', onSearchUser);
