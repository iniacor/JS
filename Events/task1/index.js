// -- algo
// 1 Демонстрация работы событий
// 2 написать функцию
// 3 получаем .rect-div
// 4 получаем .events-list
// 5 пишем функцию где вешаем addeventlistener на каждый  квдрат (div, p, span) при вызове которой в .events-list добавляем спаны через innerHTML
// 6 вешаем на кнопку clear- слушатель при клике числит поле с событиями
// 7 вешем на кнопку слушатель - при клике ремувит обработчики с квадратов
// 8 вешаем на кнопку слушатель - включает обработчики элементов
const eventsList = document.querySelector('.events-list'); //получаем ноду ивент листа
const rectDiv = document.querySelector('.rect_div'); // получаем эелемент див
const rectP = document.querySelector('.rect_p'); // получаем элемент п
const rectSpan = document.querySelector('.rect_span'); // получаем элемент спан

const clearBtn = document.querySelector('.clear-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');

const addInner = (text, color) => {
  eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const clearInner = () => {
  eventsList.innerHTML = '';
};

const removeHandler = () => {
  rectDiv.removeEventListener('click', greyDivLogger, true);
  rectDiv.removeEventListener('click', greenDivLogger);
  rectP.removeEventListener('click', greenPLogger);
  rectP.removeEventListener('click', greyPLogger, true);
  rectSpan.removeEventListener('click', greenSpanLogger);
  rectSpan.removeEventListener('click', greySpanLogger, true);
};

const greenDivLogger = addInner.bind(null, 'div', 'green'); // функция иннер для зеленого див
const greyDivLogger = addInner.bind(null, 'div', 'grey'); // функция иннер для серого див
const greenPLogger = addInner.bind(null, 'p', 'green'); // функция иннер для зеленого параграфа
const greyPLogger = addInner.bind(null, 'p', 'grey'); // функция иннер для серого параграфа
const greenSpanLogger = addInner.bind(null, 'span', 'green'); // функция иннер для зеленого спана
const greySpanLogger = addInner.bind(null, 'span', 'grey'); // функция иннер для зеленого спана

const divLogger = () => {
  rectDiv.addEventListener('click', greenDivLogger); // вешаем слушатель на див
  rectDiv.addEventListener('click', greyDivLogger, true); // вешаем слушатель на див
  rectP.addEventListener('click', greenPLogger); // вешаем слушатель на параграф
  rectP.addEventListener('click', greyPLogger, true); // вешаем слушатель на параграф
  rectSpan.addEventListener('click', greenSpanLogger); // вешаем слушатель на спан
  rectSpan.addEventListener('click', greySpanLogger, true); // вешаем слушатель на спан
};

clearBtn.addEventListener('click', clearInner); // чистим логгер
attachBtn.addEventListener('click', divLogger); // добавляем обработчик
removeBtn.addEventListener('click', removeHandler); // удаляет обработчик
divLogger();
