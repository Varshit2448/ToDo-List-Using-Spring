// UpdateTask.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateTask() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = { id, name, status };

    try {
      const response = await fetch("http://localhost:8080/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      const result = await response.json();
      console.log("Task updated:", result);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>✏️ Update Task</h2>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px" }}>
        <input
          type="number"
          placeholder="Enter Task ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter new task name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
          />
          Completed
        </label>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
}

export default UpdateTask;
