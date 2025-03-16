import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "./taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
          {task.title}
          <button onClick={() => dispatch(toggleTask(task.id))}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
