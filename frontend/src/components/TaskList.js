import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleComplete, onEdit, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks yet</h3>
        <p>Add your first task to get started!</p>
      </div>
    );
  }

  return (
    <div className="tasks-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
