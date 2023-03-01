import axios from "axios";
export const deleteItem = "deleteItem";
export const deleteFail = "deleteFail";

const deleteSuccess = (id) => {
  return {
    type: deleteItem,
    payload: id,
  };
};
const deleteFailure = (err) => {
  return {
    type: deleteFail,
    payload: err,
  };
};

export const asyncDeleteAction = (id) => {
  return (dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(deleteSuccess(id));
      })
      .catch((err) => dispatch(deleteFailure(err)));
  };
};
