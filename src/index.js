import { UI } from './modules/UI';
import {
  addNewProject,
  deleteProject,
  displayProjectOptions,
} from './modules/project';
import { createTodo } from './modules/task';

UI.renderUI();

addNewProject();

UI.addToProjectList();

deleteProject();

displayProjectOptions();
