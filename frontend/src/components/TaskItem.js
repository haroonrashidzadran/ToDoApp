import React from 'react';

function TaskItem({ task, onToggleComplete, onEdit, onDelete }) {
  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-header">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task)}
        />
        <h3 className="task-title">{task.title}</h3>
        <span className={`task-priority priority-${task.priority}`}>
          {task.priority}
        </span>
      </div>
      {task.description && (
        <p className="task-description">{task.description}</p>
      )}
      <div className="task-meta">
        {task.due_date && (
          <span>📅 Due: {formatDate(task.due_date)}</span>
        )}
        <span>🕒 Created: {formatDate(task.created_at)}</span>
      </div>
      <div className="task-actions">
        <button className="btn btn-edit" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button className="btn btn-delete" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
