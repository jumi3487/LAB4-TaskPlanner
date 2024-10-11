import { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask(''); // Clear input field
    }
  };

  return (
    <div className="input-container">
      <input 
        type="text" 
        placeholder="new task ..." 
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="task-input"
      />
      <button className="btn-save" onClick={handleAddTask}>Save</button>
    </div>
  );
}

export default TaskInput;
