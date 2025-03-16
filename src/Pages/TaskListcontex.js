import React from "react";
import { useTasks } from "../Contexts/taskcontext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useTasks();
    console.log(tasks)
  return (
    <div>
      {/* condition ? if true : false  */}
      {tasks.length === 0 ? <p>No tasks available.</p> : tasks.map((task) => <TaskItem key={task.id} task={task} />)}
    </div>
  );
};

export default TaskList;
