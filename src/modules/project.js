const Project = (title, taskList = []) => {
  const getTitle = () => title;
  const setTitle = (value) => (title = value);
  const setTaskList = (object) => {
    taskList.push(object);
  };
  const getTaskList = () => taskList;
  return { getTitle, setTitle, getTaskList, setTaskList };
};

let projects = [];
let canInput = false;

const defaultProject1 = Project('Default 1');
const defaultProject2 = Project('Default 2');
projects.push(defaultProject1);
projects.push(defaultProject2);

function addNewProject() {
  const newProjectBtn = document.querySelector('#submitProject');
  const projectInput = document.querySelector('#pname');
  const modal = document.querySelector('#projectModal');

  const createProject = () => {
    newProjectBtn.addEventListener('click', clickAdd);
    function clickAdd() {
      const newProject = Project(projectInput.value);
      if (projectInput.value !== '') {
        projects.push(newProject);
        projectInput.value = '';
        modal.style.display = 'none';
        canInput = true;
        console.log(projects);
      } else {
        alert("Project name can't be empty");
        canInput = false;
      }
    }
  };
  createProject();
}

function displayProjectOptions() {
  const projectOption = document.querySelector('#projects-option');
  for (let i = 0; i <= projects.length - 1; i++) {
    const newOption = document.createElement('option');
    newOption.setAttribute('value', `${projects[i].getTitle()}`);
    newOption.setAttribute('data-index-option', `${i}`);
    newOption.textContent = projects[i].getTitle();
    projectOption.appendChild(newOption);
  }
}

function deleteProjectOption(index) {
  const projectOption = document.querySelector('#projects-option');
  for (const option of projectOption) {
    if (option.getAttribute('data-index-option') == index) {
      projectOption.removeChild(option);
    }
  }
}

function deleteProject() {
  const projectList = document.querySelector('.project-list');
  window.addEventListener('click', (e) => {
    let item = e.path[0];
    if (item.classList.contains('delete-project')) {
      let itemIndex = item.getAttribute('data-index-delete');
      projects[itemIndex] = null;
      projectList.removeChild(e.path[1]);
      deleteProjectOption(itemIndex);
    }
  });
}

export {
  addNewProject,
  projects,
  canInput,
  deleteProject,
  displayProjectOptions,
};
