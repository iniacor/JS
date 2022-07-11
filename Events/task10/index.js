const pagination = document.querySelector('.pagination');

const handleClick = (event) => {
  if (event.target.closest('.pagination__page')) {
    console.log(event.target.dataset.pageNumber);
  }
};
pagination.addEventListener('click', handleClick);
