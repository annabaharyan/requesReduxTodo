import axios from "axios";
export const pendingGetTodos = "fetchGetRequest";
export const getTodosSuccess = "getRequestSuccess";
export const getTodosFailure = "getRequestFailure";


export const initialState = {
  loading: true,
  todo: [],
  error: "",
};

const fetchGetRequest = () => {
  return {
    type: pendingGetTodos,
  };
};
const getRequestSuccess = (todos) => {
  return { type: getTodosSuccess, payload: todos };
};
const getRequestFailure = (err) => {
  return {
    type: getTodosFailure,
    payload: err,
  };
};

export const asyncGetRequestFunc = () => {
  return (dispatch) => {
    dispatch(fetchGetRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((result) => {
        const todos = result.data;
        dispatch(getRequestSuccess(todos));
      })
      .catch((err) => dispatch(getRequestFailure(err)));
  };
};










