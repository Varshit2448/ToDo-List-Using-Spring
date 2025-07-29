// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddTask from "./AddTask";
import UpdateTask from "./UpdateTask"; 

function Home() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/findall")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tasks");
        return res.json();
      })
      .then((data) => setTasks(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📝 To-Do List</h1>

      <div style={{ marginBottom: "1rem" }}>
        <Link to="/add">
          <button style={{ marginRight: "1rem" }}>➕ Add Task</button>
        </Link>
        <Link to="/update">
          <button>✏️ Update Task</button>
        </Link>
      </div>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              marginBottom: "1rem",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "8px",
              backgroundColor: task.status ? "#e0ffe0" : "#ffe0e0",
            }}
          >
            <h3>{task.name}</h3>
            <p>
              Status:{" "}
              <strong style={{ color: task.status ? "green" : "red" }}>
                {task.status ? "Completed ✅" : "Pending ⏳"}
              </strong>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/update" element={<UpdateTask />} /> {/* 👈 New route */}
      </Routes>
    </Router>
  );
}

export default App;
