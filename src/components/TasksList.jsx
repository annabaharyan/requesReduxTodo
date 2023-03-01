import React from "react";
import { useSelector } from "react-redux";
import { getStateTodos } from "../app/tasksSlice";
import Loading from "./Loading";

import Task from "./Task";

export default function TasksList() {
  const todos = useSelector(getStateTodos);
console.log(todos);
  return (
    <>
      {todos.todo.length > 0 ? (
        <ul className="list">
          { todos.todo.map((elem) => <Task key={elem.id} todo={elem} />)}
        </ul>
       
      ) : todos.loading ? (
        <Loading />
      ) : (
        <p>{todos.error}</p>
      )}
    </>
  );
}
