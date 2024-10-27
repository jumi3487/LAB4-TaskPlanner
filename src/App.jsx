import { useState } from 'react';
import { nanoid } from 'nanoid';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: nanoid(), name: 'Drink Water', completed: false },
    { id: nanoid(), name: 'Cook Dinner', completed: false },
    { id: nanoid(), name: 'Buy Grocery', completed: false }
  ]);

  const [filter, setFilter] = useState("All");

  // Add a new task
  const handleAddTask = (taskName) => {
    setTasks([...tasks, { id: nanoid(), name: taskName, completed: false }]);
  };

  // Toggle task completion
  const handleToggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // Remove a task
  const handleRemoveTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Count remaining tasks
  const remainingTasks = tasks.filter(task => !task.completed).length;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <>
      <div className="main">
        <div className="content">
          <h1>Daily Planner</h1>
          <TaskInput onAddTask={handleAddTask} />
          
          <div className="filters">
            <button onClick={() => setFilter("All")} className={filter === "All" ? "active" : ""}>All</button>
            <button onClick={() => setFilter("Completed")} className={filter === "Completed" ? "active" : ""}>Completed</button>
            <button onClick={() => setFilter("Pending")} className={filter === "Pending" ? "active" : ""}>Pending</button>
          </div>
          <h2>You have {remainingTasks} task{remainingTasks !== 1 ? 's' : ''}</h2>
          <TaskList tasks={filteredTasks} onToggleTask={handleToggleTask} onRemoveTask={handleRemoveTask} />
        </div>
    </div>
    </>
  )
}

export default App;
