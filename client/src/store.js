import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import {
  getProjectsByIdReducer,
  getTaskDetailsReducer,
  loginReducer,
} from "./Redux/Reducer/ThemeReducers";
import { getAllProjectsReducer } from "./Redux/Reducer/ThemeReducers";

const appReducer = combineReducers({
  login: loginReducer,
  getAllProjects: getAllProjectsReducer,
  getProjectsReducerById: getProjectsByIdReducer,
  getTaskDetails: getTaskDetailsReducer,
});

let Middleware = [thunk];

export const store = createStore(appReducer, applyMiddleware(...Middleware));
