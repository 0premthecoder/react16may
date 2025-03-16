import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const App = () => {
  return (
    <div>
      <h1>Task Manager (Redux)</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
