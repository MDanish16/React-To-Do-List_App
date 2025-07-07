import React from 'react';

function ToDoItem({ task, onToggleComplete, onDelete }) {
  return (
    <li className={`todo-item${task.completed ? ' completed' : ''}`}>
      <span className="todo-text" onClick={() => onToggleComplete(task.id)}>
        <span className="checkmark">
          {task.completed && (
            <svg viewBox="0 0 20 20">
              <polyline points="4,11 9,16 16,5" fill="none" />
            </svg>
          )}
        </span>
        {task.text}
      </span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default ToDoItem; 