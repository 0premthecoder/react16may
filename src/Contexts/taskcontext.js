import { createContext, useReducer, useContext, useEffect } from "react";

// inital state of data
const initialState = {
    tasks: []
}

// Reducer function : Working with data

const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {tasks: [...state.tasks, action.payload]}
            
        case "TOGGLE_TASK":
            return {
                tasks: state.tasks.map((task) =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
                ),
            };
        case "DELETE_TASK":
           return { tasks: state.tasks.filter((task) => task.id !== action.payload) };

        default:
            return state;
    }
}

// create context
const TaskContext = createContext();

// Context Provider
export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
      <TaskContext.Provider value={{ tasks: state.tasks, dispatch }}>
        {children}
      </TaskContext.Provider>
    );
};

// Custom Hook for using Context
export const useTasks = () => {
    return useContext(TaskContext);
  };
  