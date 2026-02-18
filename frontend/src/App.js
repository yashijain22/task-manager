import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "http://127.0.0.1:8000/api/tasks/";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get(API_URL);
    setTasks(response.data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    await axios.post(API_URL, {
      title: title,
      completed: false,
    });

    setTitle("");
    fetchTasks();
  };

  const toggleComplete = async (task) => {
    await axios.patch(`${API_URL}${task.id}/`, {
      completed: !task.completed,
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API_URL}${id}/`);
    fetchTasks();
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalTasks = tasks.length;
  const progress =
    totalTasks === 0 ? 0 : Math.round((completedCount / totalTasks) * 100);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="app">
      <div className="card">
        <div className="header">
          <h1>📝 My Tasks</h1>
          <div className="stats">
            {completedCount}/{totalTasks} Done
          </div>
        </div>

        {/* Progress Ring */}
        <div className="progress-container">
          <svg width="120" height="120">
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke="#2ed573"
              strokeWidth="10"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.5s ease" }}
              transform="rotate(-90 60 60)"
            />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="bold"
            >
              {progress}%
            </text>
          </svg>
        </div>

        {/* Form */}
        <form onSubmit={addTask} className="task-form">
          <input
            type="text"
            placeholder="What do you need to do?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>

        {/* Empty State */}
        {tasks.length === 0 ? (
          <div className="empty-state">
            <div className="emoji">🚀</div>
            <p>No tasks yet</p>
            <span>Add something productive today!</span>
          </div>
        ) : (
          <div className="task-list">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`task-item ${
                  task.completed ? "completed-bg" : ""
                }`}
              >
                <span className={task.completed ? "completed" : ""}>
                  {task.title}
                </span>

                <div className="actions">
                  <button
                    className="complete-btn"
                    onClick={() => toggleComplete(task)}
                  >
                    ✔
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(task.id)}
                  >
                    ✖
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
