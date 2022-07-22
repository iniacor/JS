import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList, deleteTask } from './tasksGateway.js';

export const onListClick = (e) => {
  const isCheckBox = e.target.classList.contains('list__item-checkbox');
  const isDeleteElem = e.target.classList.contains('list__item-delete-btn');

  if (isCheckBox) {
    onToggleTask(e);
  } else if (isDeleteElem) {
    onDeleteTask(e);
  }
};

export const onToggleTask = (e) => {
  const taskId = e.target.dataset.id;

  const tasksList = getItem('tasksList');

  const { text, createDate } = tasksList.find((task) => task.id === taskId);

  const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

export const onDeleteTask = (e) => {
  const taskId = e.target.dataset.id;
  const tasksList = getItem('tasksList');

  const { text, createDate } = tasksList.find((task) => task.id === taskId);

  const done = e.target.checked;

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((tasksList) => {
      tasksList.find((task) => {
        task.id === taskId;
        localstorage.removeItem(tasksList[taskId]);
      });
      updateTask();
    });

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
// 1.Prepare data
// 2.Update data in db
// 3.Read new data from server
// 4 Save new data to front-end storage
// 5. Update UI based on new data
