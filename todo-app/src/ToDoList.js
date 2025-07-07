import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTask, completed: false },
    ]);
    setNewTask('');
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-list-container">
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask} className="todo-form">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-btn">Add</button>
      </form>
      {tasks.length === 0 ? (
        <div className="empty-state">
          <img src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png" alt="No tasks" />
          <div>No tasks yet! Add your first to-do 🎉</div>
        </div>
      ) : (
        <ul className="todo-list">
          {tasks.map(task => (
            <ToDoItem
              key={task.id}
              task={task}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList; 