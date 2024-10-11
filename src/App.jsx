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


  return (
    <>
      <div className="main">
        <div className="content">
          <h1>Daily Planner</h1>
          <TaskInput onAddTask={handleAddTask} />
          <h2>You have {remainingTasks} tasks remaining</h2>
          <TaskList tasks={tasks} onToggleTask={handleToggleTask} onRemoveTask={handleRemoveTask} />
        </div>
    </div>
    </>
  )
}

export default App;
