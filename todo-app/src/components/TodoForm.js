import React, { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: input, completed: false },
    ]);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task..."
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
