
const AddDefaultTodos = "addTodos";
export const completedSliceReducer = (state = [], action) => {
  switch (action.type) {
case AddDefaultTodos:
    return state


    default:
      return state;
  }
};

export const getAPITodos = () => {
  return (dispatch) => {
    fetch("htt://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => actionCreatorGetTodos(data));
    dispatch();
  };
};
const actionCreatorGetTodos = (res) => {
  return { type: "addTodos", payload: res };
};
