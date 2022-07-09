// -algo
// 1 создать элементы формы и добавить его в сущест-ую форму
// 2 создаем функцию для добавления
// 3 получаем узел формы +++
// 4 создаем элемент инпут +++
// 5 задаем элементу атрибут type text +++
// 6 задаем элементу атрибут name login +++
// 7 меняем существующему эл-ту значение атрибута с text на password
// добавляем в форму созданный атрибут +++

export const finishForm = () => {
  const form = document.querySelector('.login-form');
  const loginInput = document.createElement('input');
  loginInput.setAttribute('type', 'text');
  loginInput.setAttribute('name', 'login');
  const formPass = document.querySelector('input');
  formPass.setAttribute('type', 'password');
  form.prepend(loginInput);
};
// --test Data
// finishForm();
