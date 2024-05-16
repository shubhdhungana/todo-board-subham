import React, { useState } from "react";
import "../App.css";
import "../index.css";
const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput(""); // Clear input after adding task
  };

  return (
    <form className="flex flex-row items-center gap-3 bg-blue-100">
      <input
        className="border rounded-lg py-1.5 px-2.5 text-lg"
        type="text"
        placeholder="Add a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        style={{ backgroundColor: 'green', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', cursor: 'pointer' }}
        onClick={handleAddTask}
      >
        Add
      </button>
    </form>
  );
};

export default Input;
