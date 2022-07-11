const btn = document.querySelector('.single-use-btn');
const clickFn = () => {
  console.log('clicked');
  btn.removeEventListener('click', clickFn);
};
btn.addEventListener('click', clickFn);
