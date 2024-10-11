function TaskItem({ task, onToggleTask, onRemoveTask }) {
    return(
        <>
            <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleTask(task.id)}
                />
                <h3 className={task.completed ? 'completed-task' : ''}>
                    {task.name}
                </h3>
                <button 
                    classname="btn-remove"
                    onClick={() => onRemoveTask(task.id)}>
                    Remove
                </button>
            </li>
        </>
    );
}

export default TaskItem;