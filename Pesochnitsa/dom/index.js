// const manageClasses = () => {
//   document.querySelector('.one').classList.add('selected');
//   document.querySelector('.two').classList.remove('selected');

//   document.querySelector('.three').classList.toggle('three_done');
//   const four = document.querySelector('.four');
//   if (four.classList.contains('some-class')) {
//     four.classList.add('another-class');
//   }
// };
// manageClasses();

export function manageClasses() {
  const elemSelected = document.querySelector('.one').classList.add('selected');
  const elemRemove = document.querySelector('.two').classList.remove('selected');
  const elemToggle = document.querySelector('.three').classList.toggle('three_done');
  const four = document.querySelector('.four');
  if (four.classList.contains('some-class')) {
    four.classList.add('another-class');
  }
}

manageClasses();
