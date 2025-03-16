import React, { useState } from "react";
import { useTasks } from "../Contexts/taskcontext";

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const { dispatch } = useTasks();

  const addTask = () => {
    if (taskTitle.trim() === "") return;
    const newTask = { id: Date.now(), title: taskTitle, completed: false };
    
    console.log("Task Form:", newTask);

    dispatch({
      type: "ADD_TASK",
      payload:newTask,
    });

    setTaskTitle("");
  };

  return (
    <div>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTask}  style={{"margin": "10px"}}>Add Task</button>
    </div>
  );
};

export default TaskForm;
