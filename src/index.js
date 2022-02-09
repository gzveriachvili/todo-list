import { UI } from './modules/UI';
import {
  addNewProject,
  deleteProject,
  displayProjectOptions,
} from './modules/project';
import { addTask, createTodo } from './modules/task';

UI.renderUI();

addNewProject();

UI.addToProjectList();

deleteProject();

displayProjectOptions();

addTask();

UI.displayTask();
