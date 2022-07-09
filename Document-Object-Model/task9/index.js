// --algo
// 1 добавить на страницу недостающие єл-ты списка
// 2 пишем функцию для добавления
// 3 находим узел списка в документе =>  в перем.+++
//  создаем элемент списка через креаты элемент => в перем.+++
//  добавляем текст в элемент через textContent
//  повторяем создание эл-та только с другим контентом уже
//  добавляем в список созд-ые эл-ты методами append,prepand,befor, after

export const finishList = () => {
  const listItems = document.querySelector('.list');
  const specialItem = document.querySelector('li.special');

  const firstListItem = document.createElement('li');
  firstListItem.textContent = '1';

  const fourthListItem = document.createElement('li');
  fourthListItem.textContent = '4';

  const sixthListItem = document.createElement('li');
  sixthListItem.textContent = '6';

  const eighthListItem = document.createElement('li');
  eighthListItem.textContent = '8';
  listItems.prepend(firstListItem);
  listItems.append(eighthListItem);
  specialItem.before(fourthListItem);
  specialItem.after(sixthListItem);
};
// -test Data
// finishList();
