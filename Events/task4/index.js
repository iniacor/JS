const checkBox = document.querySelector('.task-status');
const cbStatus = () => {
  console.log(checkBox.checked);
};
checkBox.addEventListener('change', cbStatus);
