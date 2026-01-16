import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/tasks/';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const createTask = async (taskData) => {
    try {
      const response = await axios.post(API_URL, taskData);
      setTasks([response.data, ...tasks]);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      const response = await axios.put(`${API_URL}${id}/`, taskData);
      setTasks(tasks.map(task => task.id === id ? response.data : task));
      setEditingTask(null);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}/`);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const toggleComplete = async (task) => {
    try {
      const response = await axios.patch(`${API_URL}${task.id}/`, {
        completed: !task.completed
      });
      setTasks(tasks.map(t => t.id === task.id ? response.data : t));
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1>📝 To-Do App</h1>
        <p>Organize your tasks efficiently</p>
      </div>
      <div className="container">
        <TaskForm
          onSubmit={editingTask ? updateTask : createTask}
          editingTask={editingTask}
          onCancel={() => setEditingTask(null)}
        />
        <TaskList
          tasks={tasks}
          onToggleComplete={toggleComplete}
          onEdit={setEditingTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
