import React from "react";
import { useDispatch } from "react-redux";
import { asyncDeleteAction } from "../app/asyncActions/asyncActionDelete";
import { asyncCompletedAction } from "../app/asyncActions/asyncActionCompleted";
export default function Task({ todo }) {
  const dispatch = useDispatch();
  return (
    <li className={todo.completed ? "list-item completed" : "list-item"}>
      <form>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            dispatch(asyncCompletedAction(!todo.completed, todo.id))
          }
        />
        <label>{todo.title}</label>

        <button onClick={() => dispatch(asyncDeleteAction(todo.id))}>
          Delete
        </button>
      </form>
    </li>
  );
}
