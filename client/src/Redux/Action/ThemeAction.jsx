import axios from '../../Axios/config.js';
import { currentlySelectedItem, TaskData } from "../../Data";
import { GET_ALL_PROJECTS_ERR, GET_ALL_PROJECTS_REQUEST, GET_ALL_PROJECTS_SUCCESS, GET_PROJECT_BY_ID_ERR, GET_PROJECT_BY_ID_REQUEST, GET_PROJECT_BY_ID_SUCCESS, GET_TASK_DETAILS_ERR, GET_TASK_DETAILS_REQUEST, GET_TASK_DETAILS_SUCCESS, LOGIN_ERR, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Constants/ThemeConstants";


export const loginAction = (formData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    // let { data } = await axios.post("auth/login", formData, config);

    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    console.log(error, "error.response");
    dispatch({
      type: LOGIN_ERR,
      payload: error.data,
    });
  }
};

// Get All Projects
export const AllProjectsAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_PROJECTS_REQUEST });
    let isUserExist = localStorage.getItem("userDetails")
      ? JSON.parse(localStorage.getItem("userDetails"))
      : null;

    const config = {
      headers: {
        Authorization: `Bearer ${isUserExist?.tocken}`,
      },
    };

    let data = TaskData;

    // let { data } = await axios.get("projects/get-all-projects", config);

    dispatch({ type: GET_ALL_PROJECTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error, "error.response");
    dispatch({
      type: GET_ALL_PROJECTS_ERR,
      payload: error.data,
    });
  }
};

// Get Projects by id
export const GetProjectByIdAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PROJECT_BY_ID_REQUEST });
    let isUserExist = localStorage.getItem("userDetails")
      ? JSON.parse(localStorage.getItem("userDetails"))
      : null;

    const config = {
      headers: {
        Authorization: `Bearer ${isUserExist?.tocken}`,
      },
    };

    let data = TaskData
    // [0].issueList?.filter((item) => (item.id === id));

    // let { data } = await axios.get("projects/get-all-projects", config);

    dispatch({ type: GET_PROJECT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    console.log(error, "error.response");
    dispatch({
      type: GET_PROJECT_BY_ID_ERR,
      payload: error.data,
    });
  }
};

// Get Projects by id
export const GetTaskDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_TASK_DETAILS_REQUEST });
    let isUserExist = localStorage.getItem("userDetails")
      ? JSON.parse(localStorage.getItem("userDetails"))
      : null;

    const config = {
      headers: {
        Authorization: `Bearer ${isUserExist?.tocken}`,
      },
    };

    let data = currentlySelectedItem;
    console.log(id)
    // [0].issueList?.filter((item) => (item.id === id));

    // let { data } = await axios.get("projects/get-all-projects", config);

    dispatch({ type: GET_TASK_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error, "error.response");
    dispatch({
      type: GET_TASK_DETAILS_ERR,
      payload: error.data,
    });
  }
};

