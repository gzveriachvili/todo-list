import '../css/style.css';
import { projects, canInput } from './project';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const UI = (() => {
  const content = document.querySelector('#content');

  const createHeader = () => {
    const header = document.createElement('div');
    header.classList.add('header');

    const appLogo = document.createElement('i');
    appLogo.classList.add('fas');
    appLogo.classList.add('fa-check-double');
    const appTitle = document.createElement('h1');
    appTitle.textContent = 'taskr.';

    header.appendChild(appLogo);
    header.appendChild(appTitle);

    content.appendChild(header);
  };

  const createPage = () => {
    const page = document.createElement('div');
    page.classList.add('page');

    const sideBar = document.createElement('div');
    sideBar.classList.add('side-bar');

    const sideTop = document.createElement('div');
    sideTop.classList.add('side-top');
    const userIcon = document.createElement('i');
    userIcon.classList.add('far');
    userIcon.classList.add('fa-user-circle');
    const userName = document.createElement('p');
    userName.textContent = 'John Doe';

    sideTop.appendChild(userIcon);
    sideTop.appendChild(userName);

    const addTaskBtn = document.createElement('button');
    addTaskBtn.classList.add('add-task-button');
    addTaskBtn.setAttribute('id', 'taskModalBtn');
    addTaskBtn.textContent = '+ Add new task';

    sideBar.appendChild(sideTop);
    sideBar.appendChild(addTaskBtn);

    const projectSection = document.createElement('div');
    projectSection.classList.add('projects');
    const projectTop = document.createElement('div');
    projectTop.classList.add('project-top');
    const projectTopTitle = document.createElement('h3');
    projectTopTitle.textContent = 'Projects';
    const addProjectWrapper = document.createElement('div');
    addProjectWrapper.setAttribute('id', 'projectModalBtn');
    const addProjectBtn = document.createElement('i');
    addProjectBtn.classList.add('fas');
    addProjectBtn.classList.add('fa-plus-circle');
    addProjectWrapper.appendChild(addProjectBtn);

    projectTop.appendChild(projectTopTitle);
    projectTop.appendChild(addProjectWrapper);

    projectSection.appendChild(projectTop);

    sideBar.appendChild(projectSection);

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    page.appendChild(sideBar);
    page.appendChild(pageContent);

    content.appendChild(page);
  };

  const createTaskModal = () => {
    const taskModal = document.createElement('div');
    taskModal.innerHTML = `
    <div id="taskModal" class="task-modal">
    <div class="task-modal-content">
        <div class="task-modal-top">
            <h3>Add new task</h3>
            <span class="task-close">&times;</span>
        </div>
        <div class="task-modal-input>
          <form>
            <label for="tname">Task name:</label><br>
            <input type="text" id="tname" name="tname"><br>
            <label for="duedate">Due date:</label><br>
            <input type="date" id="dudedate" name="due-date" value="2022-07-22"><br>
            <label for="cars">Choose a project:</label><br>
              <select name="projects-option" id="projects-option">
                
              </select><br>
              <p>Select priority:</p>
                <input type="radio" id="low" name="low_prio" value="LOW">
                <label for="low">Low</label>
                <input type="radio" id="mid" name="mid_prio" value="MID">
                <label for="mid">Mid</label>
                <input type="radio" id="high" name="high_prio" value="HIGH">
                <label for="high">High</label><br>
            <input id="submitTask" type="submit" value="Add new task">
          </form>
        </div>
    </div>
  </div>`;
    content.appendChild(taskModal);
  };

  const createProjectModal = () => {
    const projectModal = document.createElement('div');
    projectModal.innerHTML = `
    <div id="projectModal" class="project-modal">
    <div class="project-modal-content">
        <div class="project-modal-top">
            <h3>Add new project</h3>
            <span class="project-close">&times;</span>
        </div>
        <div class="project-modal-input>
          <form>
            <label for="pname">Project name:</label><br>
            <input type="text" id="pname" name="pname"><br>
            <input id="submitProject" type="submit" value="Add project">
        </form>
        </div>
    </div>
  </div>`;
    content.appendChild(projectModal);
  };

  const taskModalListener = () => {
    const modal = document.querySelector('#taskModal');
    const modalContent = document.querySelector('.task-modal-content');

    const btn = document.querySelector('#taskModalBtn');

    const span = document.querySelector('.task-close');

    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      modalContent.classList.add('modal-animation-t');
    });

    span.addEventListener('click', () => {
      modal.style.display = 'none';
      modalContent.classList.remove('modal-animation-t');
    });

    window.addEventListener('click', () => {
      if (event.target == modal) {
        modal.style.display = 'none';
        modalContent.classList.remove('modal-animation-t');
      }
    });
  };

  const projectModalListener = () => {
    const modal = document.querySelector('#projectModal');
    const modalContent = document.querySelector('.project-modal-content');

    const btn = document.querySelector('#projectModalBtn');

    const span = document.querySelector('.project-close');

    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      modalContent.classList.add('modal-animation-p');
    });

    span.addEventListener('click', () => {
      modal.style.display = 'none';
      modalContent.classList.remove('modal-animation-p');
    });

    window.addEventListener('click', () => {
      if (event.target == modal) {
        modal.style.display = 'none';
        modalContent.classList.remove('modal-animation-p');
      }
    });
  };

  const displayProjectList = () => {
    const projectContainer = document.querySelector('.projects');
    const projectList = document.createElement('div');
    projectList.classList.add('project-list');
    for (let i = 0; i <= projects.length - 1; i++) {
      const project = document.createElement('p');
      project.setAttribute('data-index', `${i}`);
      project.innerHTML = `${projects[i]} <span class="delete-project" data-index-delete=${i}>x</span>`;
      projectList.appendChild(project);
    }
    projectContainer.appendChild(projectList);
  };

  const createProjectOption = () => {
    const projectOption = document.querySelector('#projects-option');
    const newOption = document.createElement('option');
    newOption.setAttribute('value', `${projects[projects.length - 1]}`);
    newOption.textContent = projects[projects.length - 1];
    projectOption.appendChild(newOption);
  };

  const addToProjectList = () => {
    const newProjectBtn = document.querySelector('#submitProject');
    let dataIndex = 2;

    newProjectBtn.addEventListener('click', () => {
      const projectList = document.querySelector('.project-list');

      if (canInput) {
        const project = document.createElement('p');
        project.setAttribute('data-index', `${dataIndex}`);
        project.innerHTML = `${
          projects[projects.length - 1]
        } <span class="delete-project" data-index-delete=${dataIndex}>x</span>`;
        projectList.appendChild(project);
        dataIndex++;

        createProjectOption();
      }
    });
  };

  const renderUI = () => {
    createHeader();
    createPage();

    createTaskModal();
    taskModalListener();

    createProjectModal();
    projectModalListener();

    displayProjectList();
  };

  return { renderUI, addToProjectList };
})();

export { UI };
