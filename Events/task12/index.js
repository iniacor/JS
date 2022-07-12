// через делегирование
// const pagination = document.querySelector('.pagination');
// const handleClick = (event) => {
//   if (event.target.closest('.pagination__page')) {
//     console.log(event.target.dataset.pageNumber);
//   }
// };
// pagination.addEventListener('click', handleClick);

// через foreach
const paginationPgs = document.querySelectorAll('.pagination__page');
const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};
paginationPgs.forEach((el) => {
  el.addEventListener('click', handleClick);
});
