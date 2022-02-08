const Project = (title, taskList) => {
  const getTitle = () => title;
  const setTitle = (value) => (name = value);
  const getTaskList = () => taskList;
  return { getTitle, setTitle, getTaskList };
};

let projects = [];
let canInput = false;

const defaultProject1 = Project('Default 1', ['task1, task2']);
const defaultProject2 = Project('Default 2', ['task1']);
projects.push(defaultProject1);
projects.push(defaultProject2);

function addNewProject() {
  const newProjectBtn = document.querySelector('#submitProject');
  const projectInput = document.querySelector('#pname');
  const modal = document.querySelector('#projectModal');

  const createProject = () => {
    newProjectBtn.addEventListener('click', clickAdd);
    function clickAdd() {
      const newProject = Project(projectInput.value, ['task1', 'task2']);
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
    // The option items have their own data attribute,
    // which then if matches with the data attribute from the project listen upon deletion,
    // the option gets deleted as well from the task input modal.
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
      console.log(itemIndex);
      console.log(projects);
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
