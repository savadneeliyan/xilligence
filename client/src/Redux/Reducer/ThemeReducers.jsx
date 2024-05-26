import {
  GET_ALL_PROJECTS_ERR,
  GET_ALL_PROJECTS_REQUEST,
  GET_ALL_PROJECTS_SUCCESS,
  GET_PROJECT_BY_ID_ERR,
  GET_PROJECT_BY_ID_REQUEST,
  GET_PROJECT_BY_ID_SUCCESS,
  GET_TASK_DETAILS_ERR,
  GET_TASK_DETAILS_REQUEST,
  GET_TASK_DETAILS_SUCCESS,
  LOGIN_ERR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../Constants/ThemeConstants";

// login
export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginSuccess: action.payload,
      };
    case LOGIN_ERR:
      return {
        ...state,
        loginLoading: false,
        loginErr: action.payload,
      };
    default:
      return state;
  }
};

// Get All Projects
export const getAllProjectsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS_REQUEST:
      return {
        ...state,
        getAllProjectsLoading: true,
      };
    case GET_ALL_PROJECTS_SUCCESS:
      return {
        ...state,
        getAllProjectsLoading: false,
        getAllProjectsSuccess: action.payload,
      };
    case GET_ALL_PROJECTS_ERR:
      return {
        ...state,
        getAllProjectsLoading: false,
        getAllProjectsErr: action.payload,
      };
    default:
      return state;
  }
};

// Get Project By Id
export const getProjectsByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PROJECT_BY_ID_REQUEST:
      return {
        ...state,
        getProjectbyIdLoading: true,
      };
    case GET_PROJECT_BY_ID_SUCCESS:
      return {
        ...state,
        getProjectbyIdLoading: false,
        getProjectbyIdSuccess: action.payload,
      };
    case GET_PROJECT_BY_ID_ERR:
      return {
        ...state,
        getProjectbyIdLoading: false,
        getProjectbyIdErr: action.payload,
      };
    default:
      return state;
  }
};

// Get Task Details
export const getTaskDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TASK_DETAILS_REQUEST:
      return {
        ...state,
        getTaskDetailsLoading: true,
      };
    case GET_TASK_DETAILS_SUCCESS:
      return {
        ...state,
        getTaskDetailsLoading: false,
        getTaskDetailsSuccess: action.payload,
      };
    case GET_TASK_DETAILS_ERR:
      return {
        ...state,
        getTaskDetailsLoading: false,
        getTaskDetailsErr: action.payload,
      };
    default:
      return state;
  }
};
