import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTask, onRemoveTask }) {
  return (
    <ul className="item-container">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggleTask={onToggleTask} 
          onRemoveTask={onRemoveTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;


