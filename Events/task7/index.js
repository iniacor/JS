// через foreach
const btnJs = document.querySelectorAll('.btn');
const handleClick = (event) => {
  console.log(event.target.textContent);
};
btnJs.forEach((btn) => {
  btn.addEventListener('click', handleClick);
});

// через map
// const btnJs = [...document.querySelectorAll('.btn')];

// const handleClick = (event) => {
//   console.log(event.target.textContent);
// };
// btnJs.map((btn) => {
//   return btn.addEventListener('click', handleClick);
// });
// через делегирование события
// const body = document.querySelector('body');
// const handleClick = () => {
//   console.log(event.target.textContent);
// };

// body.addEventListener('click', function (event) {
//   if (event.target.closest('.btn')) {
//     handleClick();
//   }
// });
// через делегирование события сокращенно
// const body = document.querySelector('body');
// const handleClick = (event) => {
//   if (event.target.closest('.btn')) {
//     console.log(event.target.textContent);
//   }
// };

// body.addEventListener('click', handleClick);
