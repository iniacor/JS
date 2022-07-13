const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

// algo 1 - create new task and add to tasks list
// 1 Реализовать возможность добавлять новые задачи
// 2 Добавляем обработчик на кнопку create +++
// 3 получаем элемент кнопки +++
// 4 получаем элемент инпута (поле ввода) +++
// 5 добавляем слушатель и обработчик на элемент +++
// 6 событие клик, в обработчик- функция создания и добавления в массив задач нового объекта (задачи).(Если поле ввода было пустое ретерним ничего не создавая). +++
// 7  вызывваем функцию renderTasks, отрисовывая заново лист +++
// 8  после добавления очищаем поле ввода +++

// algo 2 - change list's task status
// 1 изменять статус задачи + сортировать выполненные задачи
// 2 Изменение атрибута текущего значения элемента задачи
// 3 Вешаем на весь лист событие клик и обработчик на событие
// 4 добавляем дата атрибут каждой задаче со своим id(data-task-id) +++
// 5 получаем через event-target значение id (дата атрибута) целевого чекбокса. Делаем проверку -в колбеке где делегируем нужно делать if (clickedElem !== 'checkbox') return; После У данного чекбокса получаем значение атрибута done - Если значение true - меняем на false, если значение false - на true
// 6 вызывваем функцию renderTasks, отрисовывая заново лист

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('checked', done);
      checkbox.checked = done;
      checkbox.dataset.taskId = index;
      checkbox.classList.add('list__item-checkbox');
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const createBtn = document.querySelector('.create-task-btn');

const createNewTask = () => {
  const taskInputField = document.querySelector('.task-input');
  const inputFieldValue = taskInputField.value;
  if (inputFieldValue === '') {
    return;
  }
  const newTask = {
    text: inputFieldValue,
    done: false,
  };
  tasks.push(newTask);
  renderTasks(tasks);
  taskInputField.innerHTML = ''; // не работает
};
createBtn.addEventListener('click', createNewTask);

const changeStatus = (event) => {
  // if (event.target !== 'checkbox') {
  //   return;
  // }
  const idNum = event.target.dataset.taskId;
  const status = idNum.checked;
  console.log(status);
  if (status) {
    idNum.idNum.checked = 'false';
  }
  idNum.idNum.checked = 'true';
};

listElem.addEventListener('click', changeStatus());
