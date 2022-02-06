import '../css/style.css';
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
    addTaskBtn.textContent = '+ Add new task';

    sideBar.appendChild(sideTop);
    sideBar.appendChild(addTaskBtn);

    const projectSection = document.createElement('div');
    projectSection.classList.add('projects');
    const projectTop = document.createElement('div');
    projectTop.classList.add('project-top');
    const projectTopTitle = document.createElement('h3');
    projectTopTitle.textContent = 'Projects';
    const addProjectBtn = document.createElement('i');
    addProjectBtn.classList.add('fas');
    addProjectBtn.classList.add('fa-plus-circle');

    projectTop.appendChild(projectTopTitle);
    projectTop.appendChild(addProjectBtn);

    projectSection.appendChild(projectTop);

    sideBar.appendChild(projectSection);

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    page.appendChild(sideBar);
    page.appendChild(pageContent);

    content.appendChild(page);
  };

  const renderUI = () => {
    createHeader();
    createPage();
  };

  return { renderUI };
})();

export { UI };
