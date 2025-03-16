const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware to parse JSON

// In-memory task storage (instead of MongoDB)
let tasks = [];

// ✅ Add Task
app.post("/tasks", (req, res) => {
    const { id, title, completed } = req.body;
    if (!id || !title) {
        return res.status(400).json({ error: "ID and Title are required" });
    }
    const newTask = { id, title, completed: completed || false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// ✅ Get All Tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// ✅ Toggle Task Completion
app.put("/tasks/:id", (req, res) => {
    const { id } = req.params;
        tasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        res.json({ message: "Task updated", tasks });
    });

// ✅ Delete Task
app.delete("/tasks/:id", (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter(task => task.id !== id);
    res.json({ message: "Task deleted", tasks });
});

app.get("/tasks/:id", (req, res) =>{
    const {id} = req.params;
    let task = tasks.filter(t => t.id == id)
    res.json({message: "found it", task})
})
// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}/tasks`);
});

console.log("We are having some data")
