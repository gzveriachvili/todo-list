import { projects } from './project';

const createTodo = (name, date, option, priority, done) => {
  const getName = () => name;
  const getDate = () => date;
  const getOption = () => option;
  const getPriority = () => priority;
  const getDone = () => done;

  return { getName, getDate, getOption, getPriority, getDone };
};

function addTask() {
  const modal = document.querySelector('#taskModal');

  const newTaskBtn = document.querySelector('#submitTask');
  const taskName = document.querySelector('#tname');
  const taskDate = document.querySelector('#duedate');
  const taskOption = document.querySelector('#projects-option');

  newTaskBtn.addEventListener('click', clickAddTask);

  function clickAddTask() {
    const taskPriority = document.querySelector(
      'input[type=radio][name=priority]:checked'
    );
    const newTask = createTodo(
      taskName.value,
      taskDate.value,
      taskOption.value,
      taskPriority.value,
      false
    );
    for (const project of projects) {
      if (project.getTitle() == newTask.getOption()) {
        console.log(project.getTitle());
        project.setTaskList(newTask);
        // const displayOnAdd = document.querySelector('.project-list').children;
        // displayOnAdd.item(0).click();
        alert(
          'Now click on the corresponding project to view the added task(s)'
        );
      }
    }

    modal.style.display = 'none';
  }
}

export { createTodo, addTask };
