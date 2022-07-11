const textInput = document.querySelector('.text-input');

const outputContent = (event) => {
  console.log(event.target.value);
};

textInput.addEventListener('change', outputContent);
