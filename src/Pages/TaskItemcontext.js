import React from "react";
import { useTasks } from "../Contexts/taskcontext";

const TaskItem = ({task}) => {
  const { dispatch } = useTasks();

  return (
    <div style={{ margin: "10px 0", padding: "7px" }}>
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>
      <button style={{"margin": "7px"}} onClick={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
