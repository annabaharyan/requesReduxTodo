import axios from "axios";

export const addNewTodo = "getPostSuccessed";
export const addTodoRejected = "getPostFailureed";
export const addNewTodoCreator = (text, length) => {
  const todo = {
    userId: 1,
    id: length,
    title: text,
    completed: false,
  };
  return (dispatch) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", todo)
      .then((resp) => dispatch(getPostSuccess(resp)))
      .catch((err) => dispatch(getPostFailure(err)));
  };
};

const getPostSuccess = (todo) => {
  return {
    type: addNewTodo,
    payload: todo,
  };
};
const getPostFailure = (err) => {
  return {
    type: addTodoRejected,
    payload: err,
  };
};
