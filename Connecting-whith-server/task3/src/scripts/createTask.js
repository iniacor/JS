import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskInputField = document.querySelector('.task-input');

  const text = taskInputField.value;

  if (!text) {
    return;
  }

  taskInputField.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// 1.Prepare data
// 2.Write data to db
// 3.Read new data from server
// 4 Save new data to front-end storage
// 5. Update UI based on new data
