// -- algo
// 1 Демонстрация работы событий
// 2 написать функцию
// 3 получаем .rect-div
// 4 получаем .events-list
// 5 пишем функцию где вешаем addeventlistener на каждый  квдрат (div, p, span) при вызове которой в .events-list добавляем спаны через innerHTML
// 6 вешаем на кнопку clear- слушатель при клике числит поле с событиями
// 7 вешем на кнопку слушатель - при клике ремувит обработчики с квадратов
// 8
const addInner = (text, color) => {
  eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};
const clearInner = () => {
  eventsList.innerHTML = '';
};

const removeHandler = () => {
  greyDivListener = rectDiv.removeEventListener('click', greyDivLogger, true);
  greenDivListener = rectDiv.removeEventListener('click', greenDivLogger);
  greenPListener = rectP.removeEventListener('click', greenPLogger);
  greнPListener = rectP.removeEventListener('click', greyPLogger, true);
  greenSpanListener = rectSpan.removeEventListener('click', greenSpanLogger);
  greySpanListener = rectSpan.removeEventListener(
    'click',
    greySpanLogger,
    true
  );
};

const eventsList = document.querySelector('.events-list'); //получаем ноду ивент листа
const rectDiv = document.querySelector('.rect_div'); // получаем эелемент див
const rectP = document.querySelector('.rect_p'); // получаем элемент п
const rectSpan = document.querySelector('.rect_span'); // получаем элемент спан

const clearBtn = document.querySelector('.clear-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');

const divLogger = () => {
  const greenDivLogger = addInner.bind(null, 'div', 'green'); // функция иннер для зеленого див
  rectDiv.addEventListener('click', greenDivLogger); // вешаем слушатель на див
  const greyDivLogger = addInner.bind(null, 'div', 'grey'); // функция иннер для серого див
  rectDiv.addEventListener('click', greyDivLogger, true); // вешаем слушатель на див

  const greenPLogger = addInner.bind(null, 'p', 'green'); // функция иннер для зеленого параграфа
  rectP.addEventListener('click', greenPLogger); // вешаем слушатель на параграф
  const greyPLogger = addInner.bind(null, 'p', 'grey'); // функция иннер для серого параграфа
  rectP.addEventListener('click', greyPLogger, true); // вешаем слушатель на параграф

  const greenSpanLogger = addInner.bind(null, 'span', 'green'); // функция иннер для зеленого спана
  rectSpan.addEventListener('click', greenSpanLogger); // вешаем слушатель на спан
  const greySpanLogger = addInner.bind(null, 'span', 'grey'); // функция иннер для зеленого спана
  rectSpan.addEventListener('click', greySpanLogger, true); // вешаем слушатель на спан
};

clearBtn.addEventListener('click', clearInner); // чистим логгер
attachBtn.addEventListener('click', divLogger); // добавляем обработчик
removeBtn.addEventListener('click', removeHandler);
divLogger(); // удаляет обработчик
