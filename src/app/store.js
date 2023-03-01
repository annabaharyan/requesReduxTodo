import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { completedSliceReducer } from "./completedSlice";
import { taskSliceReducer } from "./tasksSlice";
const rootReducer = {
  todo: taskSliceReducer,
  completed: completedSliceReducer,
};
const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk));
export default store;
