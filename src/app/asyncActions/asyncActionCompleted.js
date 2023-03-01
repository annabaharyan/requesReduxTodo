import axios from "axios";

export const changeComplete = "changeComplete";
export const completeFailure = "completeFailure";
const changeCompletedSuccess = (boolVal, id) => {
  return { type: changeComplete, payload: { completed: boolVal, id } };
};
const changeCompletedReject = (err) => {
  return {
    type: completeFailure,
    payload: err,
  };
};

export const asyncCompletedAction = (bool, id) => {
  return (dispatch) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((resp) => {
        dispatch(changeCompletedSuccess(bool, id));
      })
      .catch((err) => dispatch(changeCompletedReject(err)));
  };
};
