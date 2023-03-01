import React, { useEffect } from "react";
import AddTodo from "./AddTodo";
import TasksList from "./TasksList";
import { useDispatch } from "react-redux";

import { Typography } from "@mui/material";
import { asyncGetRequestFunc } from "../app/asyncActions/asyncActionGet";

export default function ShowAll() {
  const dispatch = useDispatch();
  useEffect(() => {
    return dispatch(asyncGetRequestFunc());
  }, [dispatch]);
  return (
    <div>
      <Typography variant="h2" component="h2">
        ToDo List
      </Typography>

      <AddTodo />
      <TasksList />
    </div>
  );
}
