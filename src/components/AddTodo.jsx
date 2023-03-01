import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStateTodos } from "../app/tasksSlice";
import { addNewTodoCreator } from "../app/asyncActions/asyncActionsPost";

export default function AddTodo() {
  const [text, setText] = useState("");
  const stateLength = useSelector(getStateTodos).todo.length;

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      dispatch(addNewTodoCreator(text, stateLength));
    }
    setText("");
  };
  return (
    <Box
      component="form"
      sx={{
        m: 1,
        width: "25ch",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        sx={{ width: "85%" }}
        id="filled-basic"
        label="Filled"
        variant="filled"
        color="primary"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </Box>
  );
}

// import * as React from "react";
// import Box from "@mui/material/Box";
// import { IconButton, TextField } from "@mui/material";
// import "./style.css";
// import { useDispatch } from "react-redux";
// import AddBoxIcon from "@mui/icons-material/AddBox";
// import { addCreator } from "../todoSlice";
// import axios from "axios";

// export default function AddTask() {
//   const [text, settext] = React.useState("");
//   const dispatch = useDispatch();
//   const handleSumbit = (e) => {
//     e.preventDefault();

//     dispatch(addCreator(text));

//     settext("");
//   };
//   return (
//     <Box>
//       <form
//         onSubmit={handleSumbit}
//         style={{ display: "flex", alignItems: "center" }}
//       >
//         <TextField
//           sx={{ width: "85%" }}
//           label="AddTask"
//           variant="filled"
//           color="primary"
//           value={text}
//           onChange={(e) => settext(e.target.value)}
//         />
//         <IconButton color="primary" sx={{ padding: 0 }} type="submit">
//           <AddBoxIcon sx={{ fontSize: "3.05em" }} />
//         </IconButton>
//       </form>
//     </Box>
//   );
// }
