const input = document.querySelector('.text-input');
const textValue = () => {
  console.log(input.value);
};
input.addEventListener('change', textValue);
