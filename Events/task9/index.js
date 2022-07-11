const checkbox = document.querySelector('.task-status');
const checkStatus = (event) => {
  if (event.target.checked) {
    console.log(true);
  } else console.log(false);
};
checkbox.addEventListener('change', checkStatus);
