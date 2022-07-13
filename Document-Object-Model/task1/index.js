'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
// --- algo
// 1 добавить list__item на страницу
// 2 функция принимает на вход массив объектов
// 2.1 находим список (куда будем отрисовывать) по селектору и присваиваем результат в новую переменную(квериселектор)+++
// 2.2 создаем переменную результирующий массив в который будем складывать создаваемые элементы
// 2.3 Проходимся мэп по входящему массиву и на каждой итерации
// 2.2 создаем  новый эл-т через креэйт елемент (тег ли) и его присваиваем в  переменную+++
// 2.2 создаем  новый эл-т через креэйт елемент (input) и его присваиваем в  переменную+++
// 2.3 добавляем элементам текстовое содержимое и назначаем атрибуты через append+++
// 2.4 добавляем эл-там класс через класслист эдд+++
// 2.5 добавляем созданный  массив эл-нтов в переменную со списком через аппенд+++
// 3 отрисовывывает их в DOM
const renderTasks = (tasksList) => {
  const listElem = document.querySelector('.list');

  const listItemsElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.setAttribute('checked', done);
      checkboxElem.checked = done;
      checkboxElem.classList.add('list__item-checkbox');
      listItemElem.classList.add('list__item');
      listItemElem.append(checkboxElem, text);
      return listItemElem;
    });

  listElem.append(...listItemsElems);
};
renderTasks(tasks);
