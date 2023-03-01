import {
  getTodosFailure,
  getTodosSuccess,
  initialState,
  pendingGetTodos,
} from "./asyncActions/asyncActionGet";
import { deleteFail, deleteItem } from "./asyncActions/asyncActionDelete";
import {
  changeComplete,
  completeFailure,
} from "./asyncActions/asyncActionCompleted";
import { addNewTodo, addTodoRejected } from "./asyncActions/asyncActionsPost";
export const taskSliceReducer = (state = initialState, action) => {
  switch (action.type) {
    case pendingGetTodos:
      return { ...state, loading: true };
    case getTodosSuccess:
      return { loading: false, todo: action.payload, error: "" };
    case getTodosFailure:
      return { loading: false, todo: [], error: action.payload.message };
    case addNewTodo:
      return { ...state, todo: [...state.todo, action.payload.data] };
    case addTodoRejected:
      return { ...state, error: action.payload.message };
    case deleteItem:
      let filteredTodo = state.todo.filter(
        (elem) => elem.id !== action.payload
      );
      return { ...state, todo: filteredTodo };
    case deleteFail:
      return { ...state, error: action.payload.message };
    case changeComplete:
      console.log(action.payload.completed);
      const todos = state.todo.map((elem) => {
        if (elem.id === action.payload.id) {
          elem.completed = action.payload.completed;
        }
        return elem;
      });
      return { ...state, todo: todos };

    case completeFailure:
      return { ...state, error: action.payload.message };
    default:
      return state;
  }
};

export const getStateTodos = (state) => state.todo;
