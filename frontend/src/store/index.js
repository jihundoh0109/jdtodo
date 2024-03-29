import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "store/reducers/auth";
import ModalReducer from "store/reducers/modal";
import ProjectFormReducer from "store/reducers/projectForm";
import TaskFormReducer from "store/reducers/taskForm";
import TaskDetailReducer from "store/reducers/taskDetail";
import DropdownReducer from "store/reducers/dropdown";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    modal: ModalReducer,
    projectForm: ProjectFormReducer,
    taskForm: TaskFormReducer,
    taskDetail: TaskDetailReducer,
    dropdown: DropdownReducer,
  },
});

export default store;
