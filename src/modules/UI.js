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
            <input type="text" id="tname" name="tname" required><br>
            <label for="duedate">Due date:</label><br>
            <input type="date" id="duedate" name="due-date" value="2022-02-08"><br>
            <label for="cars">Choose a project:</label><br>
              <select name="projects-option" id="projects-option">
                
              </select><br>
              <p>Select priority:</p>
                <div id="priority-radio">
                  <div class="low-radio">
                    <input type="radio" id="low" name="priority" value="low" required>
                    <label for="low">Low</label>
                  </div>
                  <div class="mid-radio">
                    <input type="radio" id="mid" name="priority" value="mid">
                    <label for="mid">Mid</label>
                  </div>
                  <div class="high-radio">
                    <input type="radio" id="high" name="priority" value="high">
                    <label for="high">High</label><br>
                  </div>
                </div>        
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

    window.addEventListener('click', (e) => {
      if (e.target == modal) {
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
      project.innerHTML = `${projects[i].getTitle()} 
                          <span class="delete-project" data-index-delete=${i}>x</span>`;
      projectList.appendChild(project);
    }
    projectContainer.appendChild(projectList);
  };

  let dataIndex = 2;

  const createProjectOption = () => {
    const projectOption = document.querySelector('#projects-option');
    const newOption = document.createElement('option');
    newOption.setAttribute(
      'value',
      `${projects[projects.length - 1].getTitle()}`
    );
    newOption.setAttribute('data-index-option', `${dataIndex}`);
    newOption.textContent = projects[projects.length - 1].getTitle();
    projectOption.appendChild(newOption);
  };

  const addToProjectList = () => {
    const newProjectBtn = document.querySelector('#submitProject');

    newProjectBtn.addEventListener('click', () => {
      const projectList = document.querySelector('.project-list');

      if (canInput) {
        const project = document.createElement('p');
        project.setAttribute('data-index', `${dataIndex}`);
        project.innerHTML = `${projects[projects.length - 1].getTitle()} 
                            <span class="delete-project" data-index-delete=${dataIndex}>x</span>`;
        projectList.appendChild(project);
        createProjectOption();
        dataIndex++;
      }
    });
  };

  const displayTask = () => {
    let i = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let dataIndexCount = 0;
    window.addEventListener('click', (e) => {
      if (e.path[1].classList.contains('project-list')) {
        let index = e.path[0].getAttribute('data-index');

        const pageContent = document.querySelector('.page-content');
        if (projects[index].getTaskList()[0] !== undefined) {
          for (let m = 0; m <= projects[index].getTaskList().length - 1; m++) {
            function display(n) {
              const task = document.createElement('div');
              task.innerHTML = `
            <div class="task-wrapper" data-index-task="${dataIndexCount}">
              <h3>${projects[index].getTitle()}</h3>
              <p>${projects[index].getTaskList()[n].getName()}</p>
              <p>${projects[index].getTaskList()[n].getDate()}</p>
              <p>${projects[index].getTaskList()[n].getPriority()}</p>
              <input type="checkbox" class="checkbox-class" id="done" name="done" value="${projects[
                index
              ]
                .getTaskList()
                [n].getDone()}">
              
            </div>
          `;
              pageContent.appendChild(task);
              dataIndexCount++;
            }

            if (index == 0) {
              display(i);
              i++;
            } else if (index == 1) {
              display(b);
              b++;
            } else if (index == 2) {
              display(c);
              c++;
            } else if (index == 3) {
              display(d);
              d++;
            } else if (index == 4) {
              display(e);
              e++;
            }
          }
        } else {
          alert(
            `This project (${projects[
              index
            ].getTitle()}) contains no tasks yet. Create one by clicking on the blue button above.`
          );
        }
      }
    });
  };

  const removeTask = () => {
    const pageContent = document.querySelector('.page-content');
    window.addEventListener('click', (e) => {
      if (e.path[0].classList.contains('checkbox-class')) {
        console.log(e.path[0].checked);
        if (e.path[0].checked) {
          pageContent.removeChild(e.path[2]);
          let n = e.path[1].getAttribute('data-index-task');
          projects[n].getTaskList()[n] = null;
        }
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

  return { renderUI, addToProjectList, displayTask, removeTask };
})();

export { UI };
