const btn = document.querySelector('.search__btn');
const inputText = () => {
  const inputText = document.querySelector('.search__input');
  console.log(inputText.value);
};
btn.addEventListener('click', inputText);
